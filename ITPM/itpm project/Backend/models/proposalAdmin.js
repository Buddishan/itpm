const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const proposaladminSchema=new Schema({
    age:{
        type:Number,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    }
})
const Proposaladmin = mongoose.model("Proposaladmin",proposaladminSchema);
module.exports = Proposaladmin;