const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const addtocartSchema = new Schema({
    Thingsname: {
        type: String,
    } 
}, { timestamps: true }
);
module.exports = mongoose.model('Addtocart', addtocartSchema);
