var mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:  { type: String, required: true},
    faculty:  { type: String, required: true},
    department: { type: String, required: true},
    matric_no: { type: Number, required: true},
    gender: { type: String, required: true},
    date_of_birth: { type: Date, required: true},   
    level:  {type: String, required: true},
    phone_no:String
    // {type: mongoose.SchemaTypes.Email, required: true}
    

});

module.exports = mongoose.model('Student', studentSchema);
