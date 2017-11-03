const express = require('express');
const StudentController = require('./controllers/students_controller');
const router = express.Router();


//from index.ejs, studentHandler.js
router.get('/Student_list', StudentController.getAllStudent);

//from studentHandler.js
router.get('/student', StudentController.getAllStudent);

//from studentHandler.js
router.post('/student', StudentController.createStudent);

//from index.ejs
router.get('/Edit_Student_profile/:here', StudentController.editStudent);

//from index.ejs
router.get('/del/:deldoc', StudentController.deleteStudent);

//from Student_list.ejs 
router.get('/View_Student_profile/:profile', StudentController.viewProfile);



module.exports = router;
