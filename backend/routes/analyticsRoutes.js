const router = require('express').Router();
const Issue = require('../models/Issue');
const auth = require('../middlewares/auth');

router.get('/summary', auth(['admin', 'operator']), async (req, res) => {
  const activeIssues = await Issue.countDocuments({ status: 'active' });
  const closedIssues = await Issue.countDocuments({ status: 'closed' });
  res.json({ activeIssues, closedIssues });
});

module.exports = router;
