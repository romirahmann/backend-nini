const db = require("./../database/project.config");

// Threshold Faktor Kesebandingan
const addFaktor = async (data) => await db("faktor_kesebandingan").insert(data);

module.exports = {
  addFaktor,
};
