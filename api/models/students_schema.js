var mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    first_name:  { type: String, required: true},
    last_name:  { type: String, required: true},
    department: { type: String, required: true},
    matric_no: { type: Number, required: true},
    gender: { type: String, required: true},
    date_of_birth: { type: Date, required: true},

    level:  {type: String, required: true},
    phone_no: { type: Number, required: true},
    

});

module.exports = mongoose.model('Post', studentSchema);
