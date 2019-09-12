const request = require('supertest');
const {User} = require('../../models/users');

let server;
describe('api/users',() => {

    beforeEach(() => {server = require('../../index')})
    afterEach(() => {
        server.close();
    })

    describe('POST /' ,() => {

        it('should return 401 for invalid email or password',async () =>{

            const res = await request(server)
            .post('/api/auth')
            .send({email:'vishal@gmail.com',password:'123456'})

            expect(res.status).toBe(401);
        })
    })

    describe('POST /' ,() => {
        
        it('should return 400 if email is less than 5 characters', async () =>{
            const token = new User().generateAuthToken();

            const res = await request(server)
            .post('/api/auth')
            .set('x-auth-token',token)
            .send({email:'vi',password:'123'})

            expect(res.status).toBe(400);
        })
    })
})