const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrySchema = new Schema({
        date: { type: Date, required: true },
        logText: { type: String, required: true }
    }, {
        timestamps: true
    }
);

const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;