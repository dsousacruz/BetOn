'use strict'

const APP = require('../app');
const TeamController = require('../controllers/TeamController');

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
        let teamController = new TeamController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetTeam":
                results = await teamController.getAll();
                break;

            case "BetOn-Prod-GetTeamById":
                results = await teamController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveTeam":
                results = await teamController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteTeam":
                results = await teamController.delete(event.pathParameters.id);
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
