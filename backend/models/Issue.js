const mongoose = require('mongoose');
const IssueSchema = new mongoose.Schema({
  description: String,
  location: { type: [Number], index: '2dsphere' }, // [lat, lng]
  severity: String,
  status: String,
  reportedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Issue', IssueSchema);
