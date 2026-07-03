require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const errorHandler = require("./src/middleware/errorHandler");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./src/controllers/user.controller");

const app = express();
app.use(express.json());

// Routes
app.post("/users", createUser);
app.get("/users", getUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.use(errorHandler);

connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
