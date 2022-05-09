const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BirthSchema = new Schema({
    BCID: { type: String, required: true },
    Name: { type: String, required: true },
    MName: { type: String, required: true },
    FName: { type: String, required: true },
    POB: { type: String, required: true },
    Bday: { type: Date, required: true },
    Citizen: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Birth = mongoose.model("Birth",BirthSchema);

module.exports = Birth;