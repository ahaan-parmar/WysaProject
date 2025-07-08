const express = require('express');
const { body } = require('express-validator');
const { signup, login } = require('./auth.controller');
const rateLimiter = require('./auth.middleware');

const router = express.Router();

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
  ],
  signup
);

router.post(
  '/login',
  rateLimiter,
  [
    body('email').isEmail().withMessage('Valid email required'),
    body('password').exists().withMessage('Password required')
  ],
  login
);

module.exports = router; 