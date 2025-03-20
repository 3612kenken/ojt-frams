const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded
// //import mongoose from 'mongoose';
mongoose
    .connect('mongodb://localhost:27017/db_dtr')
    .then(()=>
        console.log({
            message: 'Connected to MongoDB...',
        })
    ).catch((err)=>console.error('Connection failed...', err));
    
    const DTRTime=[];

    const TimeModel = require('./dtrShema');


    /*async function GetLog(id){
        const log = await TimeModel.find({ employee_id: id})
        .limit(10)
        .sort({ employee_id: id })
        .select({employee_id: id,  time_in_am: id, time_out_am: id, time_in_pm: id, time_out_pm: id, time_in_ot: id, time_out_ot: id});

        console.log("Got Users"+ log);
        const removedFirstBracket = log.flat();
        DTRTime.push(removedFirstBracket);
    }
    GetLog(1);*/
    async function CreateLog(emp_id, _day, ti_am, to_am, ti_pm, to_pm, ti_ot, to_ot, _status){
        //const empid = await TimeModel.find().select('employee_id');
        const log =  new TimeModel({
        employee_id: emp_id,
        day: _day,
        time_in_am: ti_am,
        time_out_am: to_am,
        time_in_pm: ti_pm,
        time_out_pm: to_pm,
        time_in_ot: ti_ot,
        time_out_ot: to_ot,
        status: _status,
     });
        const result = await log.save();
        console.log(result);
    }
  
    async function GetLog() {
        // Fetch all documents
        const log = await TimeModel.find()
            .select('employee_id day time_in_am time_out_am time_in_pm time_out_pm time_in_ot time_out_ot status');
    
        console.log("All Logs:", log);
    
        // Assuming you just want to push the logs into DTRTime
        DTRTime.push(log);
    }
    GetLog();

    app.post('/api/dtrlogs', (req, res) => {
        // Extract parameters from the request body
        const { employee_id, day, time_in_am, time_out_am, time_in_pm, time_out_pm, time_in_ot, time_out_ot, status } = req.body;
        // Simple validation to ensure that all required parameters are sent
        if (!employee_id ) {
            return res.status(400).send('Name, email, and age are required.');
        }
        CreateLog(employee_id, day, time_in_am, time_out_am, time_in_pm, time_out_pm, time_in_ot, time_out_ot, status);

    // CreateLog("CL-2024-007", new Date(), "07:30", "11:30", "12:30", "05:00", "06:00", "06:30", "Over Time");

    const logs = {
            employee_id, 
            day, 
            time_in_am, 
            time_out_am, 
            time_in_pm, 
            time_out_pm, 
            time_in_ot, 
            time_out_ot, 
            status
        };
        res.status(201).send(logs);
    });


    app.get('/api/dtrlogs', (req, res)=> {
        res.send(DTRTime);
     });

     app.get('/api/dtrlogs/:employee_id', (req, res) => {
       // console.log("DTRTime: ", DTRTime); // Log the DTRTime array to check its contents
        // Ensure that both are compared as numbers
        const log = DTRTime.flat().filter((c) => c.employee_id.toString() === req.params.employee_id);


        if (!log) {
            return res.status(404).send('The employee time with the given ID not found');
        }
        res.send(log);
    });
     
    const PORT = process.env.PORT || 5000;
     app.listen(PORT, ()=>
         console.log(`listening on http://localhost:${PORT}...`)
     );