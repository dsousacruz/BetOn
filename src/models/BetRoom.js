'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'League'
    },
    date: {
        type: Date,
        dafault: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['inactive', 'active', 'block'],
        default: 'active'
    }
});

module.exports = mongoose.model('BetRoom', schema);