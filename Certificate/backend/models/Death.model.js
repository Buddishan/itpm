const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeathSchema = new Schema({
    DID: { type: String, required: true },
    Name: { type: String, required: true },
    Reason: { type: String, required: true },
    place: { type: String, required: true },
    age: { type: String, required: true },
    TOD: { type: String, required: true },
   
}, {
    timestamps: true,
});

const Death = mongoose.model("Death",DeathSchema);

module.exports = Death;