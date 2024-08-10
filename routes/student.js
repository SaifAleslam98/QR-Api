var express = require('express');
var router = express.Router();

/** Controller */
const { setKey, getAllStudents,insertStudent, checkStudent ,deleteAl} = require('../controllers/student-controller');

router.route('/')
  .get(getAllStudents)
  .post(setKey,insertStudent);

  router.route('/check').get(checkStudent);
  router.get('/del', deleteAl)
module.exports = router;
