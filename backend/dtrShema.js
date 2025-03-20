const mongoose = require('mongoose');

const dtrSchema = new mongoose.Schema({
    employee_id:{
       // type: Number,
        type: String,
        required: true
    },
    day:{
        type: Date,
        required: true
    },

    time_in_am:{
        type: String,
        required: false
    },
    time_out_am:{
        type: String,
        required: false
    },
    time_in_pm:{
        type: String,
        required: false
    },
    time_out_pm:{
        type: String,
        required: false
    },
    time_in_ot:{
        type: String,
        required: false
    },
    time_out_ot:{
        type: String,
        required: false
    }
    ,
    status:{
        type: String,
        required: false
    }

}, {collection: 'tbl_time'});

const TimeProfile = mongoose.model('TimeProfile',dtrSchema );

module.exports = TimeProfile;