const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all complaints (for Admin)
router.get('/', (req, res) => {
  try {
    const complaints = db.prepare('SELECT * FROM complaints ORDER BY date DESC').all();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching complaints' });
  }
});

// POST new complaint (resident)
router.post('/', (req, res) => {
  const { flat, resident, category, description } = req.body;

  if (!flat || !resident || !description) {
    return res.status(400).json({ message: 'Flat, resident name, and description are required' });
  }

  try {
    // Generate ticket ID (e.g., C-042)
    const last = db.prepare('SELECT id FROM complaints ORDER BY id DESC LIMIT 1').get();
    const nextId = (last ? last.id + 1 : 1).toString().padStart(3, '0');
    const ticket_id = `C-${nextId}`;

    const insert = db.prepare(`
      INSERT INTO complaints (ticket_id, flat, resident, category, description)
      VALUES (?, ?, ?, ?, ?)
    `);
    insert.run(ticket_id, flat, resident, category, description);
    
    res.status(201).json({ 
      success: true, 
      ticket_id, 
      message: 'Complaint registered successfully' 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering complaint' });
  }
});

// PATCH update status
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const update = db.prepare('UPDATE complaints SET status = ? WHERE id = ?');
    update.run(status, id);
    res.json({ success: true, message: 'Status updated' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating status' });
  }
});

module.exports = router;
