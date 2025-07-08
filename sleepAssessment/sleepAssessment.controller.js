const SleepAssessment = require('./sleepAssessment.model');
const { validationResult } = require('express-validator');

// Get current user's assessment
exports.getAssessment = async (req, res) => {
  try {
    const assessment = await SleepAssessment.findOne({ user: req.user.userId });
    if (!assessment) {
      return res.status(404).json({ message: 'No assessment found' });
    }
    res.json(assessment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create or update assessment
exports.upsertAssessment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { durationStruggling, bedtime, waketime, typicalHours } = req.body;
  try {
    const assessment = await SleepAssessment.findOneAndUpdate(
      { user: req.user.userId },
      { durationStruggling, bedtime, waketime, typicalHours },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(200).json(assessment);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 