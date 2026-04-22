const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET dashboard statistics
router.get('/stats', (req, res) => {
  try {
    // 1. Pending Collections (Total maintenance due)
    const pendingCollections = db.prepare('SELECT SUM(amount_due) as total FROM dues').get().total || 0;
    const pendingFlatsCount = db.prepare('SELECT COUNT(*) as count FROM dues WHERE amount_due > 0').get().count || 0;

    // 2. Open Complaints
    const openComplaints = db.prepare("SELECT COUNT(*) as count FROM complaints WHERE status != 'Resolved'").get().count || 0;
    const overdueComplaints = db.prepare("SELECT COUNT(*) as count FROM complaints WHERE status = 'Overdue'").get().count || 0;

    // 3. Document/Queries (Using queries table as proxy for document requests for now)
    const pendingQueries = db.prepare("SELECT COUNT(*) as count FROM queries WHERE status = 'New'").get().count || 0;

    // 4. Resolved this Month (Mocking this as we don't have historical resolution dates in this simple schema)
    const resolvedThisMonth = 24; 

    // 5. Latest Queries
    const latestQueries = db.prepare('SELECT * FROM queries ORDER BY date DESC LIMIT 5').all();

    // 6. Latest Complaints
    const latestComplaints = db.prepare('SELECT * FROM complaints ORDER BY date DESC LIMIT 5').all();

    // 7. Defaulters
    const defaulters = db.prepare('SELECT * FROM dues WHERE amount_due > 0 ORDER BY amount_due DESC LIMIT 5').all();

    res.json({
      stats: {
        pendingCollections: `₹${pendingCollections.toLocaleString('en-IN')}`,
        pendingFlats: pendingFlatsCount,
        openComplaints,
        overdueComplaints,
        pendingQueries,
        resolvedThisMonth
      },
      latestQueries,
      latestComplaints,
      defaulters
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching dashboard stats' });
  }
});

module.exports = router;
