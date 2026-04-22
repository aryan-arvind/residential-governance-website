const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.resolve(__dirname, '../data.db');
const db = new Database(dbPath);

// Initialize Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT UNIQUE NOT NULL,
    pin_hash TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS notices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    category TEXT,
    urgent BOOLEAN DEFAULT 0,
    date TEXT DEFAULT (datetime('now', 'localtime'))
  );

  CREATE TABLE IF NOT EXISTS complaints (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_id TEXT UNIQUE NOT NULL,
    flat TEXT NOT NULL,
    resident TEXT NOT NULL,
    category TEXT,
    description TEXT,
    status TEXT DEFAULT 'Under Review',
    date TEXT DEFAULT (datetime('now', 'localtime'))
  );

  CREATE TABLE IF NOT EXISTS dues (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    flat TEXT UNIQUE NOT NULL,
    resident TEXT NOT NULL,
    amount_due DECIMAL(10, 2) DEFAULT 0.00,
    months_overdue INTEGER DEFAULT 0,
    last_payment TEXT
  );

  CREATE TABLE IF NOT EXISTS queries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    flat TEXT,
    message TEXT,
    status TEXT DEFAULT 'New',
    date TEXT DEFAULT (datetime('now', 'localtime'))
  );
`);

// Seed Admin PIN (Demo: 1234)
const seedAdmin = () => {
  const adminExists = db.prepare('SELECT id FROM admins LIMIT 1').get();
  if (!adminExists) {
    const pin = process.env.ADMIN_PIN || '1234';
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pin, salt);
    
    const insert = db.prepare('INSERT INTO admins (role, pin_hash) VALUES (?, ?)');
    insert.run('secretary', hash);
    insert.run('chairman', hash);
    insert.run('treasurer', hash);
    insert.run('committee', hash);
    console.log('— Admin roles seeded with PIN:', pin);
  }
};

// Seed initial notices
const seedNotices = () => {
  const noticeExists = db.prepare('SELECT id FROM notices LIMIT 1').get();
  if (!noticeExists) {
    const insert = db.prepare('INSERT INTO notices (title, description, category, urgent, date) VALUES (?, ?, ?, ?, ?)');
    insert.run('Free Health Check-up Camp', 'In collaboration with Apollo Clinic, society is organising a free check-up (BP, Sugar, BMI) for all residents on 21st April, 9 AM to 1 PM at the Clubhouse.', 'Health', 0, '2025-04-21');
    insert.run('April Maintenance Due', 'All residents are requested to clear April 2025 maintenance dues by 30th April. Payments via portal preferred.', 'Urgent', 1, '2025-04-18');
    insert.run('Annual General Meeting', '27th AGM of Rishikesh CHS on 5th May 2025 at 7:00 PM in Society Hall. Your attendance is mandatory.', 'AGM', 0, '2025-04-10');
    insert.run('Water Supply Interruption', 'Full day water supply cut on 22nd April (Sunday) due to municipal pipeline repair and tank cleaning.', 'Water', 1, '2025-04-05');
    insert.run('Electricity Maintenance', 'Scheduled power cut by MSEDCL for transformer maintenance on 24th April, 10 AM to 4 PM.', 'Electric', 0, '2025-04-20');
    console.log('— High-priority notices seeded.');
  }
};

// Seed initial dues (Defaulters)
const seedDues = () => {
  const duesExists = db.prepare('SELECT id FROM dues LIMIT 1').get();
  if (!duesExists) {
    const insert = db.prepare('INSERT INTO dues (flat, resident, amount_due, months_overdue, last_payment) VALUES (?, ?, ?, ?, ?)');
    insert.run('B-201', 'Mahesh Gawde', 18600.00, 3, 'Jan 2025');
    insert.run('D-502', 'Rekha Pawar', 12400.00, 2, 'Feb 2025');
    insert.run('A-405', 'Kishore Nair', 6200.00, 1, 'Mar 2025');
    insert.run('C-308', 'Veena Kulkarni', 6200.00, 1, 'Mar 2025');
    insert.run('B-114', 'Jayant More', 6200.00, 1, 'Mar 2025');
    console.log('— Defaulter records seeded.');
  }
};

// Seed initial complaints
const seedComplaints = () => {
  const complaintsExists = db.prepare('SELECT id FROM complaints LIMIT 1').get();
  if (!complaintsExists) {
    const insert = db.prepare('INSERT INTO complaints (ticket_id, flat, resident, category, description, status, date) VALUES (?, ?, ?, ?, ?, ?, ?)');
    insert.run('C-041', 'A-301', 'Rahul Sharma', 'Lift', 'Lift breakdown in A Wing', 'Urgent', '2025-04-20');
    insert.run('C-040', 'D-505', 'Priya Mehta', 'Plumbing', 'Water leakage on terrace', 'In Progress', '2025-04-18');
    insert.run('C-037', 'B-102', 'Nilesh Kulkarni', 'Electrical', 'Street light fused in compound', 'Overdue', '2025-04-13');
    console.log('— Complaints seeded.');
  }
};

// Seed queries
const seedQueries = () => {
  const queryExists = db.prepare('SELECT id FROM queries LIMIT 1').get();
  if (!queryExists) {
    const insert = db.prepare('INSERT INTO queries (name, flat, message, status, date) VALUES (?, ?, ?, ?, ?)');
    insert.run('Rahul Sharma', 'B-204', 'Why has my maintenance increased by ₹400?', 'New', '2025-04-20');
    insert.run('Priya Mehta', 'A-302', 'Requesting permission for AC installation.', 'New', '2025-04-20');
    console.log('— Queries seeded.');
  }
};

require('dotenv').config();
seedAdmin();
seedNotices();
seedDues();
seedComplaints();
seedQueries();

module.exports = db;
