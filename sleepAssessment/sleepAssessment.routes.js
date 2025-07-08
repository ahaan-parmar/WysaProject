const express = require('express');
const { body } = require('express-validator');
const { getAssessment, upsertAssessment } = require('./sleepAssessment.controller');
const auth = require('../auth/auth.middleware.jwt');

const router = express.Router();

// GET current user's assessment
router.get('/assessment', auth, getAssessment);

// POST create/update assessment
router.post(
  '/assessment',
  auth,
  [
    body('durationStruggling').isIn(['<2 weeks', '2-8 weeks', '>8 weeks']).withMessage('Invalid duration'),
    body('bedtime').isString().notEmpty().withMessage('Bedtime required'),
    body('waketime').isString().notEmpty().withMessage('Wake time required'),
    body('typicalHours').isInt({ min: 1, max: 24 }).withMessage('Typical hours must be 1-24')
  ],
  upsertAssessment
);

module.exports = router; 