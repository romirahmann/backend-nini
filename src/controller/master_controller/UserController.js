const model = require("../../model/user.model");
const api = require("../../tools/common");
const bcrypt = require("bcrypt");

// USERS
const getAllUsers = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
const updateUsers = async (req, res) => {
  const { id } = req.params;
  const dataUser = req.body;
  try {
    let data = await model.update(id, dataUser);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
const register = async (req, res) => {
  const new_user = req.body;
  if (new_user && new_user.password && typeof new_user.password === "string") {
    try {
      const hashedPassword = await bcrypt.hash(new_user.password, 10);
      new_user.password = hashedPassword;
      let data = await model.register(new_user);
      return api.ok(res, data);
    } catch {
      return api.error(res, "Internal Server Error");
    }
  } else {
    return api.error(res, "Password Invalid");
  }
};

// USER ROLE
const addRole = async (req, res) => {
  const newRole = req.body;
  try {
    let data = await model.addRole(newRole);
    return api.ok(res, data);
  } catch {
    return api.error(res, "User not found or role already exists.");
  }
};
module.exports = {
  getAllUsers,
  register,
  addRole,
  updateUsers,
};
