'use strict'

const mongoose = require('mongoose');
const config = require('../config');

class MongooseService {

    constructor() {
        const User = require('../models/User');
        const Team = require('../models/Team');
        const League = require('../models/League');
        const Group = require('../models/Group');
        const Round = require('../models/Round');
        const Game = require('../models/Game');
        const BetRoom = require('../models/BetRoom');

        mongoose.connect(config.connectionString);
    }

    get mongoose() {
        return mongoose;
    }

    model(name) {
        return mongoose.model(name);
    }

    closeConnection() {
        mongoose.connection.close();
    }
}

module.exports = MongooseService;