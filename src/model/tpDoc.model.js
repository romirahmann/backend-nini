const db = require("./../database/project.config");

const getAllByUser = async (id) =>
  await db
    .select(
      "t.tp_doc_id",
      "t.nama_perusahaan",
      "t.tahun_pajak",
      "t.user_id",
      "u.username",
      "u.role_id"
    )
    .from("tp_doc as t")
    .join("users as u", "u.user_id", "t.user_id")
    .where("t.user_id", id);
const add = async (data) => await db("tp_doc").insert(data);
const update = async (id, data) =>
  await db("tp_doc").where("tp_doc_id", id).update(data);

module.exports = {
  getAllByUser,
  add,
  update,
};
