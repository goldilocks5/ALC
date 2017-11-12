const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();


router.get('/student_list', StudentController.getAllStudent);

router.put('/student/:student_id', StudentController.editStudent);

router.post('/student', StudentController.createStudent);

router.get('/student/edit/:edit_here', StudentController.editStudentPage);

router.delete('/student/delete/:del_doc', StudentController.deleteStudent);

router.get('/student/view/:profile', StudentController.viewProfile);



module.exports = router;
