const request = require('supertest');
const {User} = require('../../models/users');

let server;
describe('api/movies',() => {

    beforeEach(() => {server = require('../../index')})
    afterEach(() => {
        server.close();
    })

    describe('GET /' , () => {
        
        it('should return 404 if movie with id was not found' , async () => {
            const res = await request(server)
            .get('/api/movies/10')

            expect(res.status).toBe(404);
        })
    })

    describe('POST /' ,() => {

        it('should return 401 if not authorized to post a movie',async () =>{
            //const token = new User({name:"qwerty",email:"qwer@gmail.com",password:"12345",isAdmin:true}).generateAuthToken();
            const token = new User({name:"qwerty",email:"qwer@gmail.com",password:"12345"}).generateAuthToken();

            const res = await request(server)
            .post('/api/movies')
            .set('x-auth-token',token)
            .send({name:"movie",genre:"thriller"})

            expect(res.status).toBe(401);
        })
    })


    describe('DELETE /' ,() => {

        it('should return 401 if not authorized to delete a movie',async () =>{
            //const token = new User({name:"qwerty",email:"qwer@gmail.com",password:"12345",isSuperAdmin:true}).generateAuthToken();
            const token = new User({name:"qwerty",email:"qwer@gmail.com",password:"12345"}).generateAuthToken();

            const res = await request(server)
            .delete('/api/movies/1')
            .set('x-auth-token',token)
            .send({name:"movie",genre:"thriller"})

            expect(res.status).toBe(401);
        })
    })

})
