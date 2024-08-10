var express = require('express');
var router = express.Router();

/** Controller */
const { getAllAttendance } = require('../controllers/attendance-controller');

router.route('/')
  .get(getAllAttendance);

module.exports = router;
