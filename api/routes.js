const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();

router.get('/student', StudentController.getAllStudent);
router.post('/student', StudentController.createStudent);
// router.put('')

// router.get('/Student_list', StudentController.getStudent);
// router.get('/')

module.exports = router;
