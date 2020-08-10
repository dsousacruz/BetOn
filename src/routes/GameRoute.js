'use strict'

const APP = require('../app');
const GameController = require('../controllers/GameController');

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

async function execute(event, context, callback) {
    let app = new APP();

    try {
        let gameController = new GameController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetGame":
                results = await gameController.getAll();
                break;

            case "BetOn-Prod-GetGameById":
                results = await gameController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveGame":
                results = await gameController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteGame":
                results = await gameController.delete(event.pathParameters.id);
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
