const express = require('express');
const helmet = require('helmet');
const authRoutes = require('./auth/auth.routes');
const sleepAssessmentRoutes = require('./sleepAssessment/sleepAssessment.routes');
const { validationResult } = require('express-validator');

const app = express();

app.use(helmet());
app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);
app.use('/api/sleep', sleepAssessmentRoutes);

// Validation error formatter
app.use((err, req, res, next) => {
  if (err && err.errors) {
    return res.status(400).json({
      errors: err.errors.map(e => ({ msg: e.msg, param: e.param }))
    });
  }
  next(err);
});

// General error handler (no stack traces in production)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

module.exports = app; 