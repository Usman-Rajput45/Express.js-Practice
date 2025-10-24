import request from "supertest";
import app from "../app.mjs";

describe("User API", () => {
  let userId;

  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
  });

  it("should create a user", async () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    const res = await request(app).post("/api/users").send(userData);
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty("_id");
    userId = res.body.user._id;
  });

  it("should get user by ID", async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
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
