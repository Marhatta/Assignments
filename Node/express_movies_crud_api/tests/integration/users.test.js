const request = require('supertest');
const mongoose  = require('mongoose');
const {User} = require('../../models/users');

let server;
describe('api/users',() => {

    beforeEach(() => {server = require('../../index')})
    afterEach(() => {
        server.close();
    })

    describe('POST /' , () => {
        it('should return status 400 if the credentials are not valid',async ()=>{
            const res = await request(server)
                .post('/api/users')
                .send({name:"vishal",email:'vishal@gmail.com',password:'12345'})

            expect(res.status).toBe(400);
        })
    })
})