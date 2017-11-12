const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();

//from index.ejs, studentHandler.js
router.get('/student_list', StudentController.getAllStudent);

//from studentHandler.js
router.put('/student/:student_id', StudentController.editStudent);

//from studentHandler.js
router.post('/student', StudentController.createStudent);

//from index.ejs
router.get('/student/edit/:edit_here', StudentController.editStudentPage);

//from index.ejs
router.delete('/student/delete/:del_doc', StudentController.deleteStudent);

//from student_list.ejs 
router.get('/student/view/:profile', StudentController.viewProfile);



module.exports = router;
