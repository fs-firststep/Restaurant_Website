const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
    },
    country : {
        type : String,
        required : true
    }
})


// // now we need to create a collection 

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register ;

