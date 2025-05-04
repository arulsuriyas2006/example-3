const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const favouriteSchema = new Schema({
    favouritedish: {
        type: String,
    }
}, { timestamps: true }
);
module.exports = mongoose.model('Favourite', favouriteSchema);