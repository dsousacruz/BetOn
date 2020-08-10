'use strict'

import * as betRoom from '../src/routes/BetRoomRoute';

const TIMEOUT = 20000;

describe('#BetRoomRoute', function () {

    // it('\n #Save BetRoom \n', () => {
    //     let event = {
    //         body: JSON.stringify({
    //             user: "5af2f4000490960878317ecc",
    //             name: "Sala teste 2",
    //             league: "5ae331e82d63d57bcc9bdcb0"
    //         })
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-SaveBetRoom"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //     }

    //     betRoom.save(event, context, callback);
    // });

    // it('\n #Delete Team \n', (done) => {

    //     let event = {
    //         queryStringParameters: {
    //             id: 1
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetTeam"
    //     };

    //     let callbackList = (ctx, data) => {
    //         expect(data.statusCode).to.equal('200');

    //         let body = JSON.parse(data.body);

    //         event.queryStringParameters.id = body[0]._id;
    //         context.functionName = "BetOn-Prod-DeleteTeam";

    //         teamRoute.delete(event, context, callbackDelete);
    //     }

    //     teamRoute.getAll(event, context, callbackList);

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).to.equal('200');
    //         done();
    //     }
    // });

    it('\n #Get All Bets Rooms \n', (done) => {

        let event = {};
        let context = {
            functionName: "BetOn-Prod-GetBetRoom"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
            done();
        }

        betRoom.getAll(event, context, callback);
    });

    // it('\n #Get By Id \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "123"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetTeamById"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual('200');
    //         done();
    //     }

    //     team.getById(event, context, callback);
    // });
});