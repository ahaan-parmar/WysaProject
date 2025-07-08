const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 attempts
  duration: 900 // per 15 minutes
});

module.exports = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (err) {
    res.status(429).json({ message: 'Too many login attempts. Please try again later.' });
  }
}; 