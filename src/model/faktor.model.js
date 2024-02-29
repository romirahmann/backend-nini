const db = require("./../database/project.config");

// Threshold Faktor Kesebandingan
const getAll = async () => await db.select("*").from("faktor_kesebandingan");
const addFaktor = async (data) => await db("faktor_kesebandingan").insert(data);

module.exports = {
  getAll,
  addFaktor,
};
