const router = require('express').Router();
const Issue = require('../models/Issue');
const auth = require('../middlewares/auth');

router.get('/', auth(['admin', 'operator']), async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

router.post('/', auth(['citizen', 'admin', 'operator']), async (req, res) => {
  const newIssue = new Issue(req.body);
  await newIssue.save();
  res.json(newIssue);
});

module.exports = router;
