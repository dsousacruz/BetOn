'use strict'

const APP = require('../app');
const BetRoomController = require('../controllers/BetRoomController');

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
        let betRoomController = new BetRoomController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetBetRoom":
                results = await betRoomController.getAll();
                break;

            case "BetOn-Prod-GetBetRoomById":
                results = await betRoomController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveBetRoom":
                results = await betRoomController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteBetRoom":
                results = await betRoomController.delete(event.pathParameters.id);
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
