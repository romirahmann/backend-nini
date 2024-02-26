const model = require("../../model/tpDoc.model");
const api = require("../../tools/common");

const getAllByUserId = async (req, res) => {
  const { userID } = req.params;
  try {
    let data = await model.getAllByUser(userID);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};

const addTpDoc = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.add(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
const updateTpDoc = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(id, newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
module.exports = {
  getAllByUserId,
  addTpDoc,
  updateTpDoc,
};
