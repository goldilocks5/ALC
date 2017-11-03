const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();

router.get('/student', StudentController.getAllStudent);
router.post('/student', StudentController.createStudent);
router.get('/Edit_Student_profile/:here', StudentController.editStudent);
router.get('/del/:deldoc', StudentController.deleteStudent);
router.get('Student_list', StudentController.getAllStudent);



module.exports = router;
