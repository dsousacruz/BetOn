'use strict'

const APP = require('../app');
const LeagueController = require('../controllers/LeagueController');

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
        let leagueController = new LeagueController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetLeague":
                results = await leagueController.getAll();
                break;

            case "BetOn-Prod-GetLeagueById":
                results = await leagueController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveLeague":
                results = await leagueController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteLeague":
                results = await leagueController.delete(event.pathParameters.id);
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
