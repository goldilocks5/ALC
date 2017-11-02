const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();

router.get('/student', StudentController.getStudent);
router.post('/student', StudentController.createStudent);
// router.put('')

module.exports = router;
