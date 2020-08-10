'use strict'

import * as league from '../src/routes/LeagueRoute';

const TIMEOUT = 10000;

describe('#LeagueRoute', function () {

    // it('\n #Save League \n', () => {
    //     let event = {
    //         body: JSON.stringify({
    //             name: "Campeonato Alemão ",
    //             country: "Alemanha",
    //             startDate: "2018-08-30",
    //             endDate: "2019-06-01",
    //             status: 'active'
    //         })
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-SaveLeague"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //     }

    //     league.save(event, context, callback);
    // });

    // it('\n #Delete League \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "0ccd86eb-4f7d-ffdf-5aed-c7395c43a426"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-DeleteLeague"
    //     };

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     league.delete(event, context, callbackDelete);
    // }, TIMEOUT);

    // it('\n #Get All Leagues \n', (done) => {

    //     let event = {};
    //     let context = {
    //         functionName: "BetOn-Prod-GetLeague"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     league.getAll(event, context, callback);
    // }, TIMEOUT);

    it('\n #Get By Id \n', (done) => {

        let event = {
            pathParameters: {
                id: "ab6b620c-09cc-c407-66ae-16bd511e7d72"
            }
        };
        let context = {
            functionName: "BetOn-Prod-GetLeagueById"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
            done();
        }

        league.getById(event, context, callback);
    });
});