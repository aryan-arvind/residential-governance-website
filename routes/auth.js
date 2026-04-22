const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db/database');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

// Admin Login
router.post('/login', (req, res) => {
  const { role, pin } = req.body;

  if (!role || !pin) {
    return res.status(400).json({ message: 'Role and PIN are required' });
  }

  try {
    const admin = db.prepare('SELECT * FROM admins WHERE role = ?').get(role);

    if (!admin) {
      return res.status(401).json({ message: 'Invalid role or PIN' });
    }

    const isMatch = bcrypt.compareSync(pin, admin.pin_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid role or PIN' });
    }

    const token = jwt.sign(
      { id: admin.id, role: admin.role },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      success: true,
      token,
      admin: {
        role: admin.role
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
