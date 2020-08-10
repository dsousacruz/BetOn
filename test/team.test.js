'use strict'

import * as team from '../src/routes/TeamRoute';

const TIMEOUT = 20000;

describe('#TeamRoute', function () {

    // it('\n #Save Team \n', () => {
    //     let event = {
    //         body: JSON.stringify({
    //             name: "Cruzeiro Esporte Clube",
    //             nickName: "Cruzeiro",
    //             initials: "CRU"
    //         })
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-SaveTeam"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //     }

    //     team.save(event, context, callback);
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

    // it('\n #Get All Teams \n', (done) => {

    //     let event = {};
    //     let context = {
    //         functionName: "BetOn-Prod-GetTeam"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     team.getAll(event, context, callback);
    // });

    it('\n #Get By Id \n', (done) => {

        let event = {
            pathParameters: {
                id: "123"
            }
        };
        let context = {
            functionName: "BetOn-Prod-GetTeamById"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual('200');
            done();
        }

        team.getById(event, context, callback);
    });
});