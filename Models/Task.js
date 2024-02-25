const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
    DutyLocation:{
        type:String,
        require:true,
    },
    PatrolingTimeStart:{
        type:String,
        require:true,
    },
    PatrolingTimeEnd:{
        type:String,
        require:true,
    },
    PatrolingTimeMid:{
        type:String,
        require:true,
    },
    Progress:{
        type:String,
        require:true,
    },
    CompletedBy:{
        type:mongoose.Types.ObjectId,
        Ref

    }
    
})