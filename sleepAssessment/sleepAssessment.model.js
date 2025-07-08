const mongoose = require('mongoose');

const sleepAssessmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true // Only one assessment per user for MVP
  },
  durationStruggling: {
    type: String,
    enum: ['<2 weeks', '2-8 weeks', '>8 weeks'],
    required: true
  },
  bedtime: {
    type: String,
    required: true
  },
  waketime: {
    type: String,
    required: true
  },
  typicalHours: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SleepAssessment', sleepAssessmentSchema); 