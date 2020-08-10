'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    nickName: {
        type: String,
        trim: true,
        required: true
    },
    initials: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Team', schema);