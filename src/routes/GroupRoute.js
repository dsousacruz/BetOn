'use strict'

const APP = require('../app');
const GroupController = require('../controllers/GroupController');

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
        let groupController = new GroupController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetGroup":
                results = await groupController.getAll();
                break;

            case "BetOn-Prod-GetGroupById":
                results = await groupController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveGroup":
                results = await groupController.save(JSON.parse(event.body));
                break;

            case "BetOn-Prod-DeleteGroup":
                results = await groupController.delete(event.pathParameters.id);
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
