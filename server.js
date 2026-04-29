require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, './')));

// Route Imports
const authRoutes = require('./routes/auth');
const noticeRoutes = require('./routes/notices');
const complaintRoutes = require('./routes/complaints');
const dashboardRoutes = require('./routes/dashboard');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/dashboard', dashboardRoutes);

// --- DevOps / MLOps Routes ---

// Prometheus Metrics
const promClient = require('prom-client');
promClient.collectDefaultMetrics({ prefix: 'residential_app_' });

app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', promClient.register.contentType);
    res.end(await promClient.register.metrics());
  } catch (ex) {
    res.status(500).end(ex);
  }
});

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});


// Catch-all for HTML files (optional but good for SPA behavior if needed)
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

app.listen(PORT, () => {
  console.log(`
🚀 Server running at http://localhost:${PORT}
📁 Web root: ${__dirname}
  `);
});
