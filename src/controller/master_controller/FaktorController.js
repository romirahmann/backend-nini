const model = require("../../model/faktor.model");
const api = require("../../tools/common");

const getAllFaktor = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};
const addFaktorKesebandingan = async (req, res) => {
  const newFaktor = req.body;
  try {
    let data = await model.addFaktor(newFaktor);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error");
  }
};

module.exports = {
  getAllFaktor,
  addFaktorKesebandingan,
};
