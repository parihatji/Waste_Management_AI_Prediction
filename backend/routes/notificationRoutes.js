const router = require('express').Router();
const Notification = require('../models/Notification');
const auth = require('../middlewares/auth');

router.get('/', auth(['admin', 'operator']), async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
});

router.post('/', auth(['admin']), async (req, res) => {
  const notification = await Notification.create(req.body);
  res.json(notification);
});

module.exports = router;
