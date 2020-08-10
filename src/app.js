'use strict'

const MongooseService = require('./services/MongooseService');

class APP {

    constructor() {
        this.MongooseService = new MongooseService();
    }

    get mongooseSerivce() {
        return this.MongooseService;
    }

    done(error, result, callback) {
        this.MongooseService.closeConnection();
        let statusCode = error ? (error.statusCode ? error.statusCode : 400) : 200

        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(error ? error.message : result),
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
                "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
            }
        });
    }
}

module.exports = APP;