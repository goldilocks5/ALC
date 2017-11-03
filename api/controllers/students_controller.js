const StudentSchema = require('../models/students_schema');

class StudentController {

    constructor() {
        console.log('new student controller instance created')
    }

    getAllStudent(req, res, next) {
        StudentSchema.find({}, (err, students) => {
            if (err)
                res.json({
                    message: "Students not found",
                    status: false
                });

            if (students) {
                console.log(students);
                res.render('/Student_list', {posts: students});
                
            }

        })
    }

    createStudent(req, res, next) {
        const newStudent = new StudentSchema();
        newStudent.first_name = req.body.first_name;
        newStuden.Last_name = req.body.last_name
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
        var removeQuery = studentSchema.remove({id : del_id });
        
        removeQuery.exec();

    }

    editStudent(req, res, next) {
        var edit_id= req.params.here;
        StudentSchema.findAndModify({ id:'edit__id'}, (err, students) => {
            if (err)
                res.json({
                    message: "failed to edit",
                    status: false
                });

            if (students) {
                console.log(students);
                res.render('/Student_list', {posts: students});

            }

        })
    }

    viewProfile(req, res, next){
        var view_id=req.params.profile;
        StudentSchema.findOne( {id:'view_id'}, function(err,obj) { 
            console.log(obj); 
            res.render('/View_Student_profile', {view_posts: obj});
        });
        
    }

    }


module.exports = new StudentController();