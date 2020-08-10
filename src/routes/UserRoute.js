'use strict'

const APP = require('../app');
const UserController = require('../controllers/UserController');
const AuthService = require('../services/AuthService');

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
        let userController = new UserController(app);
        let results = "";

        switch (context.functionName) {
            case "BetOn-Prod-GetUser":
                //await AuthService.authorize(event.headers);
                results = await userController.getAll();
                break;

            case "BetOn-Prod-GetUserById":
                //await AuthService.authorize(event.headers);
                results = await userController.getById(event.pathParameters.id);
                break;

            case "BetOn-Prod-SaveUser":
                let userBody = JSON.parse(event.body);

                // if (userBody.roles && userBody.roles.includes("admin")) 
                //     await AuthService.authorize(event.headers);

                results = await userController.save(userBody);
                break;

            case "BetOn-Prod-DeleteUser":
                //await AuthService.authorize(event.headers);
                results = await userController.delete(event.pathParameters.id);
                break;

            case "BetOn-Prod-Authenticate":
                let user = await userController.authenticate(JSON.parse(event.body));

                if (!user)
                    throw new Error('Invalid username or password');

                results = await AuthService.generateToken({
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    roles: user.roles
                });

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