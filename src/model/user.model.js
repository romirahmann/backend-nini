const db = require("./../database/project.config");

// users
const getAll = async () =>
  await db
    .select(
      "u.user_id",
      "u.username",
      "u.role_id",
      "ur.role_name",
      "ur.role_description"
    )
    .from("users as u")
    .join("user_role as ur", "ur.role_id", "u.role_id")
    .where("u.is_deleted", 0);
const register = async (data) => await db("users").insert(data);

// ROLE USERS
const addRole = async (data) => await db("user_role").insert(data);

module.exports = {
  getAll,
  register,
  addRole,
};
