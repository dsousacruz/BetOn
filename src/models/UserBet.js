'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    betRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BetRoom'
    },
    round: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Round'
    },
    games: [
        {
            game: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Game'
            },
            teamOne: {
                type: String
            },
            teamTwo: {
                type: String
            },
            star: {
                type: Boolean,
                required: true
            },
            points: {
                type: Number
            }
        }
    ],
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

module.exports = mongoose.model('UserBet', schema);