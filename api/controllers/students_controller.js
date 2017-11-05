const Student = require('../models/students_schema');

class StudentController {

    constructor() {
        console.log('new student controller instance created')
    }

    getAllStudent(req, res, next) {
        Student.find({}, (err, students) => {
            if (err)
                res.json({
                    message: "Students not found",
                    status: false
                });

            if (students) {
                console.log(students);
                res.render('Student_list', {students: students});
                
            }

        })
    }

    createStudent(req, res, next) {
        const newStudent = new Student();
        newStudent.name = req.body.name;
        newStudent.faculty = req.body.faculty;
        newStudent.matric_no = req.body.matric_no;
        newStudent.department = req.body.department;
        newStudent.level = req.body.level;
        newStudent.gender = req.body.gender;
        newStudent.phone_no = req.body.phone_no;
        newStudent.date_of_birth = req.body.date_of_birth;

        newStudent.save((err) => {
            if (err) {
                
                console.log(err)
                res.json({ status: false, message: ' Student creation failed' })
            }

            else
                res.json({ status: true, message: 'Student successfully created' })
        })
    }

    deleteStudent(req, res, next) {
        var del_id= req.params.deldoc;
        var removeQuery = Student.remove({ _id: del_id });
        
        removeQuery.exec();

    }

    editStudent(req, res, next) {
        var edit_id= req.params.here;

        const edit_newStudent = new Student();
        edit_newStudent.name = req.body.name;
        edit_newStuden.faculty= req.body.faculty;
        edit_newStudent.matric_no = req.body.matric_no;
        edit_newStudent.department = req.body.department;
        edit_newStudent.level = req.body.level;
        edit_newStudent.gender = req.body.gender;
        edit_newStudent.phone_no = req.body.phone_no;
        edit_newStudent.date_of_birth = req.body.date_of_birth;

        Student.findOneAndUpdate({ _id: edit_id}, {edit_newStudent}, {new: true}, (err, students) => {
            if (err)
                res.json({
                    message: "failed to edit",
                    status: false
                });

            if (students) {
                console.log(students);
                res.json({ status: true, message: 'Student successfully created' })

            }

        })
    }

    viewProfile(req, res, next){
        var view_id=req.params.profile;
        Student.findOne( { _id: view_id}, function(err,obj) { 
            console.log(obj); 
            res.render('View_Student_profile', {view_students: obj});
        });
        
    }

    }


module.exports = new StudentController();