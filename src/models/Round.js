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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'League'
    }
});

schema.virtual('games', {
    ref: 'Game',
    localField: '_id',
    foreignField: 'round'
});

schema.options.toJSON = { virtuals: true };

module.exports = mongoose.model('Round', schema);