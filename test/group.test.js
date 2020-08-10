'use strict'

import * as group from '../src/routes/GroupRoute';

const TIMEOUT = 10000;

describe('#GroupRoute', function () {

    it('\n #Save Group \n', (done) => {
        let event = {
            body: JSON.stringify({
                name: "Grupo A",
                league: "ab6b620c-09cc-c407-66ae-16bd511e7d72"
            })
        };
        let context = {
            functionName: "BetOn-Prod-SaveGroup"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
            done();
        }

        group.save(event, context, callback);
    });

    // it('\n #Delete Group \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "92ebb636-b11e-e20f-7af6-7266023772a2"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-DeleteGroup"
    //     };

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     group.delete(event, context, callbackDelete);
    // }, TIMEOUT);

    // it('\n #Get All Groups \n', (done) => {

    //     let event = {};
    //     let context = {
    //         functionName: "BetOn-Prod-GetGroup"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     group.getAll(event, context, callback);
    // }, TIMEOUT);

    // it('\n #Get By Id \n', (done) => {

    //     let event = {
    //         pathParameters: {
    //             id: "92ebb636-b11e-e20f-7af6-7266023772a2"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetGroupById"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         done();
    //     }

    //     group.getById(event, context, callback);
    // });
});