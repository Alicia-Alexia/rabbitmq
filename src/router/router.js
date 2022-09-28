const express = require('express');
const router = express.Router();

const user = require('../controller/createUser');
const createUser = new user();
const status = require('../controller/createStatus');
const createStatus = new status();
const event = require('../controller/createEvent');
const createEvent = new event();
const subscription = require('../controller/createSubscription');
const createSubscription = new subscription();

router.post('/user', createUser.createUser);
router.post('/status', createStatus.createStatus);
router.post('/event', createEvent.createEvent);
router.post('/subscription', createSubscription.createSubscription);

module.exports = router;




