"use strict";

const http = require("http");
const server = require("../src/server");

describe("server", () => {
  afterAll(() => {
    server.close();
  });

  // TEST POST /CREATE-CHARACTER ROUTE
  test("Creates character", (done) => {
    const options = {
      method: "POST",
      hostname: "localhost",
      port: 3000,
      path: "/create-character?class=Mage&gender=Female&funFact=Loves%20magic",
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        const responseBody = JSON.parse(data);
        expect(res.statusCode).toBe(201);
        expect(responseBody.character).toEqual({
          charClass: "Mage",
          gender: "Female",
          funFact: "Loves magic",
        });
        done();
      });
    });
    req.end();
  });

  test("Confirm character creation", (done) => {
    const options = {
      method: "POST",
      hostname: "localhost",
      port: 3000,
      path: "/confirm-character",
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        const response = JSON.parse(data);
        expect(response.message).toBe("Character confirmed!");
        done();
      });
    });
    req.end();
  });

  test("View character", (done) => {
    const options = {
      method: "GET",
      hostname: "localhost",
      port: 3000,
      path: "/view-character",
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        const response = JSON.parse(data);
        expect(response).toHaveProperty("charClass", "Mage");
        expect(response).toHaveProperty("gender", "Female");
        expect(response).toHaveProperty("funFact", "Loves magic");
        done();
      });
    });

    req.end();
  });
});
