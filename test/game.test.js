'use strict'

import * as game from '../src/routes/GameRoute';

const TIMEOUT = 10000;

describe('#GameRoute', function () {

    it('\n #Save Game \n', (done) => {
        let event = {
            body: JSON.stringify({
                //id: "5ae710d17f723f4b015f2c9f",
                round: "5af596749f66d9080d840eb9",
                group: "5ae70fe249e6f67c46934eca",
                date: '2018-03-30 16:00:00',
                status: 'active',
                teams: [
                    {
                        team: "5adb65983353cf7373390a85",
                        goals: 0
                    },
                    {
                        team: "5addd545cfbcf429ede2fa32",
                        goals: 0
                    }
                ]
            })
        };
        let context = {
            functionName: "BetOn-Prod-SaveGame"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
            done();
        }

        game.save(event, context, callback);
    });

    // it('\n #Delete Game \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "429f1d52-d4c5-1e40-50e7-6fb3a69c0349"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-DeleteGame"
    //     };

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     game.delete(event, context, callbackDelete);
    // }, TIMEOUT);

    // it('\n #Get All Games \n', (done) => {

    //     let event = {};
    //     let context = {
    //         functionName: "BetOn-Prod-GetGame"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     game.getAll(event, context, callback);
    // }, TIMEOUT);

    // it('\n #Get By Id \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "429f1d52-d4c5-1e40-50e7-6fb3a69c0349"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetGameById"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     game.getById(event, context, callback);
    // }, TIMEOUT);
});