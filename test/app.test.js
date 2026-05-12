const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("should return Hello DevOps", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello DevOps");
  });

  it("should return users data", async () => {
    const res = await request(app).get("/api/users");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});