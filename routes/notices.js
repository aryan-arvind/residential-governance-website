const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET all notices
router.get('/', (req, res) => {
  try {
    const notices = db.prepare('SELECT * FROM notices ORDER BY date DESC').all();
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notices' });
  }
});

// POST new notice (Protected route would go here, but keeping simple for now)
router.post('/', (req, res) => {
  const { title, description, category, urgent } = req.body;
  
  if (!title) return res.status(400).json({ message: 'Title is required' });

  try {
    const insert = db.prepare(`
      INSERT INTO notices (title, description, category, urgent)
      VALUES (?, ?, ?, ?)
    `);
    const result = insert.run(title, description, category, urgent ? 1 : 0);
    res.status(201).json({ id: result.lastInsertRowid, message: 'Notice posted' });
  } catch (error) {
    res.status(500).json({ message: 'Error posting notice' });
  }
});

module.exports = router;
