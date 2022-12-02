import request from "supertest";
import app from "../src/app";


describe("route handlers", () => {

    test('responds to /item', async () => {
        const res = await request(app).get('/api/item');
        const errorMessage = JSON.parse(res.text).message;
        expect(res.statusCode).toBe(400);
        expect(errorMessage).toEqual('Missing parameters in request');
    });


})
