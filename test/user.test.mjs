// import request from "supertest";
// import app from "../app.mjs";

// describe("User API", () => {
//   it("should get all users", async () => {
//     const res = await request(app).get("/api/users");
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toHaveProperty("users");
//     // Add more assertions as needed
//   });

//   it("should create a user", async () => {
//     const res = await request(app)
//       .post("/api/users")
//       .send({
//         name: "Test User",
//         email: "test@example.com",
//         password: "password123"
//       });
//     expect(res.statusCode).toBe(201);
//     expect(res.body).toHaveProperty("users");
//     expect(res.body.user.email).toBe("test@example.com");
//   });
// });



import request from "supertest";
import app from "../app.mjs";
import mongoose from "mongoose";

let userId;

describe("User API", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should get all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("users");
    expect(Array.isArray(res.body.users)).toBe(true);
  });

  it("should create a user", async () => {
    const res = await request(app)
      .post("/api/users")
      .send({
        name: "Test User",
        email: "test@example.com",
        password: "password123"
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user.email).toBe("test@example.com");
    userId = res.body.user._id;
  });

  it("should get user by ID", async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("user");
    expect(res.body.user._id).toBe(userId);
  });

  it("should update user", async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({ name: "Jane Doe" });
    expect(res.statusCode).toBe(200);
    expect(res.body.user.name).toBe("Jane Doe");
  });

  it("should delete user", async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
  });
});