const app = require('./index');
const request = require("supertest");
const request = supertest(app)


test('response init', async () => {
    const response = await request.get("/");
    expect(response.text).toBe('Hello World!');
});

test('end point youtube', async() => {
    const response = await request.get("/youtube");
    expect(response.text).toBe('Hello Youtuber!')
})
