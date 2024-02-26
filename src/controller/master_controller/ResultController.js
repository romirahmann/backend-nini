const model = require("../../model/results.model");
const api = require("../../tools/common");

const getAllByTpId = async (req, res) => {
  const { tpId } = req.params;
  try {
    let data = await model.getByTpDoc(tpId);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};

const addResult = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.add(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
const updateResult = async (req, res) => {
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
  getAllByTpId,
  addResult,
  updateResult,
};
