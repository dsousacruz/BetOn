'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    league: {
        type: String,
        ref: 'League'
    }
});

module.exports = mongoose.model('Group', schema);