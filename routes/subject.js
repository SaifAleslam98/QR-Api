var express = require('express');
var router = express.Router();

/** Controller */
const { setKey, getAllSubjects,insertSubject } = require('../controllers/subject-controller');

router.route('/')
  .get(getAllSubjects)
  .post(setKey,insertSubject);

module.exports = router;
