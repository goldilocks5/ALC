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
        newStudent.phone_no = $req.body.phone_no;
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

        Student.findOne({ _id: del_id }).remove().exec()
            .then(()=>{
                res.json({status: true, message: "Student successfully deleted :)"} )
            })
            .catch((err)=>{
                res.json({status: false, message: "Student failed to be deleted :)"} )
            })
        };
        
        

    editStudentPage(req, res, next){
        const edit_id= req.params.here;

        Student.findOne({ _id: edit_id}, function(err, editit){
        res.render('edit_student_profile', { edit_students: editit });
    });
    }

    editStudent(req, res, next) {
        const edit_id= req.params.student_id;
        
        Student.findOneAndUpdate({ _id: edit_id}, req.body, {new: true}, (err, student) => {
            if (err)
                res.json({
                    message: "failed to edit",
                    status: false
                });

            if (student) {
                console.log(student);
                res.json({ status: true, message: 'Student successfully edited' })
            } else {
                res.json({ status: false, message: 'Student doesn\'t exist'})
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