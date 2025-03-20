const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    employee_id:{
       // type: Number,
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: false
    },
    firstname:{
        type: String,
        required: false
    },
    middle:{
        type: String,
        required: false
    },
    designation:{
        type: String,
        required: false
    },
    department:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: false
    }
    ,
    date_entry:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: false
    }

}, {collection: 'tbl_employee'});

const EmployeeProfile = mongoose.model('EmployeeProfile',employeeSchema );
module.exports = EmployeeProfile;