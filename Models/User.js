const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
    },
    PhoneNumber:{
        type:String,
        require:true,
    },
    DateOfBirth:{
        type:String,
        require:true,
    },
    Gender:{
        type:String,
        enum:{
            values:["Male","Female","Others"],
        }
    },
    RegistrationNumber:{
        type:Number,
        require:true,
    },
    OTP:{
       type:String,
       require:true,
    },
    UserRole:{
        type:String,
        enum:{
            values:["User","Admin","Regulator", "MaterAdmin"],
        }
    },


})

module.exports = mongoose.model("User", userSchema);