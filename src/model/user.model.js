const db = require("./../database/project.config");

const register = async (data) => await db("users").insert(data);

// ROLE USERS
const addRole = async (data) => await db("user_role").insert(data);

module.exports = {
  register,
  addRole,
};
