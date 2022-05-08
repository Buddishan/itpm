const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const proposalSchema=new Schema({
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
    }
})
const Proposal = mongoose.model("Proposal",proposalSchema);
module.exports = Proposal;