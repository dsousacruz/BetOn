'use strict'

import * as round from '../src/routes/RoundRoute';

const TIMEOUT = 10000;

describe('#RoundRoute', function () {

    // it('\n #Save Round \n', () => {
    //     let event = {
    //         body: JSON.stringify({
    //             name: "1ª Rodada",
    //             league: '5aeb0c191c9d1f209f92687d'
    //         })
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-SaveRound"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //     }

    //     round.save(event, context, callback);
    // }), TIMEOUT;

    // it('\n #Delete Round \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "0ccd86eb-4f7d-ffdf-5aed-c7395c43a426"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-DeleteRound"
    //     };

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     round.delete(event, context, callbackDelete);
    // }, TIMEOUT);

    it('\n #Get All Rounds \n', (done) => {

        let event = {};
        let context = {
            functionName: "BetOn-Prod-GetRound"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
            done();
        }

        round.getAll(event, context, callback);
    }, TIMEOUT);

    // it('\n #Get By Id \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "fe441fdd-6616-0d8d-a6d1-9d1746bd4154"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetRoundById"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     round.getById(event, context, callback);
    // }, TIMEOUT);
});