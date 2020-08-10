'use strict'

const APP = require('../app');
const RoundController = require('../controllers/RoundController');
//const AuthService = require('../services/AuthService');

exports.getAll = async (event, context, callback) => {
    execute(event, context, callback);
}

exports.getById = async (event, context, callback) => {
    execute(event, context, callback);
}

exports.save = async (event, context, callback) => {
    execute(event, context, callback);
}

exports.delete = async (event, context, callback) => {
    execute(event, context, callback);
}

exports.authenticate = async (event, context, callback) => {
    execute(event, context, callback);
}

async function execute(event, context, callback) {
    let app = new APP();

    try {
        let roundController = new RoundController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetRound":
                results = await roundController.getAll();
                break;

            case "BetOn-Prod-GetRoundById":
                results = await roundController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveRound":
                results = await roundController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteRound":
                results = await roundController.delete(event.pathParameters.id);
                break;

            default:
                throw new Error(`Unsupported function "${context.functionName}"`);
                break;
        }

        app.done(null, results, callback);

    } catch (error) {
        app.done(error, null, callback);
    }
}