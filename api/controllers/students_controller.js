const StudentSchema = require('../models/students_schema');

class StudentController {

    constructor() {
        console.log('new student controller instance created')
    }

    getStudent(req, res, next) {
        StudentSchema.find({}, (err, students) => {
            if (err)
                res.json({
                    message: "Students not found",
                    status: false
                });

            if (students) {


                res.json({
                    data: students,
                    status: true
                });
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
        newStudent.religion = req.body.religion;
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

    }

    getAllStudents(req, res, next) {

    }
}

module.exports = new StudentController();