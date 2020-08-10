'use strict'

import * as user from '../src/routes/UserRoute';

const TIMEOUT = 10000;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

describe('#UserRoute', () => {
    it('\n\n #Create User \n\n', async () => {

        let event = {
            // headers: {
            //     accessToken: ""
            // },
            body: JSON.stringify({
                name: "Diego " ,//+ getRandomArbitrary(0, 1000),
                email: "diego-sousa@outlook.com",
                password: "teste",
                status: "active",
                roles:["admin"]
            })
        };
        let context = {
            functionName: "BetOn-Prod-SaveUser"
        };
        let callback = (ctx, data) => {
            console.log(data);
            expect(data.statusCode).toEqual(200);
        }

        await user.save(event, context, callback);
    }, TIMEOUT);


    // it('\n\n Get All Users \n\n', async () => {
    //     const event = 'event';
    //     let context = {
    //         functionName: "BetOn-Prod-GetUser"
    //     };
    //     const callback = (error, response) => {
    //         console.log(response);
    //         expect(response.statusCode).toEqual(200);
    //     };

    //     await user.getAll(event, context, callback);
    // }, TIMEOUT);

    // it('\n\n #Get By Id \n\n', async () => {

    //     let event = {
    //         headers: {
    //             accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGFjY2U5NGFjY2U0MGE1MzgyMTU4ZCIsImVtYWlsIjoiZGllZ28tc291c2FAb3V0bG9vay5jb20iLCJuYW1lIjoiRGllZ28iLCJyb2xlcyI6W10sImlhdCI6MTUyMTEzMjEwOSwiZXhwIjoxNTIxMjE4NTA5fQ._ZeJYuwj4WznEoODlXnrd-sOiWMBl4N6GWb_TvTWz9g"
    //         },
    //         pathParameters: {
    //             id: "e42529df-3a6d-df3c-cb38-acdc80d1f056"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-GetUserById"
    //     };
    //     let callback = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //         expect(typeof data.body).toBe("string");
    //     }

    //     await user.getById(event, context, callback);
    // }, TIMEOUT);

    // it('\n\n #Delete User \n\n', async () => {

    //     let event = {
    //         headers: {
    //             accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhOGFjY2U5NGFjY2U0MGE1MzgyMTU4ZCIsImVtYWlsIjoiZGllZ28tc291c2FAb3V0bG9vay5jb20iLCJuYW1lIjoiRGllZ28iLCJyb2xlcyI6W10sImlhdCI6MTUyMTIyNTExOCwiZXhwIjoxNTIxMzExNTE4fQ.UBvJ40e6HvxAlrQyB8TEw71bi8IYH6j_V3HwhIsPEDs"
    //         },
    //         pathParameters: {
    //             id: "5a9d4e8375fdd20c2438add3"
    //         }
    //     };
    //     let context = {
    //         functionName: "BetOn-Prod-DeleteUser"
    //     };

    //     let callbackDelete = (ctx, data) => {
    //         console.log(data);
    //         expect(data.statusCode).toEqual(200);
    //     }

    //     await user.delete(event, context, callbackDelete);

    // }, TIMEOUT);

    // it('\n\n #User Authenticate \n\n', async (done) => {

    //   let event = {
    //     body: JSON.stringify({
    //       email: "diego-sousa@outlook.com",
    //       password: "teste"
    //     })
    //   };
    //   let context = {
    //     functionName: "BetOn-Prod-AuthenticateUser"
    //   };
    //   let callback = (ctx, data) => {
    //     console.log(data);
    //     expect(data.statusCode).toEqual(200);
    //     done();
    //   }

    //   await user.authenticate(event, context, callback);
    // });

});