const mongoose = require('mongoose')


const excersiceSchema = mongoose.Schema({
    username:{required:true,type:String},
    description:{required:true,type:String},
    duration:{type: Number,required:true},
    date:{type:Number,required:true}
},{
    timestamps:true
}
)

const Exercise = mongoose.model('Exercise',excersiceSchema)
module.exports = Exercise


