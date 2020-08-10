'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    round: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Round'
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['inactive', 'active', 'suspend', 'canceled', 'done'],
        default: 'active'
    },
    teams: [{
        team: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        },
        goals: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Game', schema);