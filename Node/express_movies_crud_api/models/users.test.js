const users = require('./users');

const mockGenerateAuthToken = jest.fn(users.generateAuthToken);

describe('generate Auth Token',() => {
    it('should not be called even once',() => {
        expect(mockGenerateAuthToken.mock.calls.length).toBe(0);
    })
    
    it('should return a token of type String',() => {
         expect(mockGenerateAuthToken.mockReturnValue("a"));
    })
})

