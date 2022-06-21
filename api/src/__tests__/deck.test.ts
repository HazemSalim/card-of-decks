import app from "../server";
import request from "supertest";

const deckID = "90fdb765-94a7-47ec-9815-e57d7a9d4bc1";
// group test using describe
describe("POST /deck", () => {
  it("returns status code 200 if data is passed well", async () => {
    const res = await request(app)
      .post("/deck")
      .send({ type: "FULL", shuffled: true });

    expect(res.statusCode).toEqual(200);
  });

  it("returns bad request if data passed bad", async () => {
    const res = await request(app).post("/deck").send();
    expect(res.statusCode).toEqual(400);
  });
});

describe("GET /deck:id", () => {
  it("returns status code 200 if data is passed well", async () => {
    const res = await request(app).get(`/deck/${deckID}`).send();

    expect(res.statusCode).toEqual(200);
  });
});

describe("PUT /deck:id/draw/:numberOfCards", () => {
  it("returns status code 200 if data is passed well", async () => {
    const res = await request(app).put(`/deck/${deckID}/draw/2`).send();

    expect(res.statusCode).toEqual(200);
  });
});
