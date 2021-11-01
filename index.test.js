const app = require('./index');
const request = require("supertest");


test('response init', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe('Hello World!');
});

