const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();

//from index.ejs, studentHandler.js
router.get('/Student_list', StudentController.getAllStudent);

//from studentHandler.js
router.put('/student/:student_id', StudentController.editStudent);

//from studentHandler.js
router.post('/student', StudentController.createStudent);

//from index.ejs
router.get('/edit_student_profile/:here', StudentController.editStudentPage);

//from index.ejs
router.delete('/student/:del_doc', StudentController.deleteStudent);

//from Student_list.ejs 
router.get('/View_Student_profile/:profile', StudentController.viewProfile);



module.exports = router;
