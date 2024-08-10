var express = require('express');
var router = express.Router();

/** Controller */
const { getAllFaculties,insertFaculty } = require('../controllers/faculty-controller');

router.route('/')
  .get(getAllFaculties)
  .post(insertFaculty);

module.exports = router;
