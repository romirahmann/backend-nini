const db = require("./../database/project.config");

const getByTpDoc = async (id) =>
  await db
    .select(
      "r.tp_doc_id",
      "r.question_id",
      "r.transaksi_afiliasi",
      "r.transaksi_independent",
      "r.description",
      "r.no_halaman",
      "t.nama_perusahaan",
      "t.tahun_pajak",
      "t.user_id",
      "u.username",
      "q.category_id",
      "q.question",
      "c.category_name"
    )
    .from("results as r")
    .join("tp_doc as t", "t.tp_doc_id", "r.tp_doc_id")
    .leftJoin("users as u", "u.user_id", "t.user_id")
    .leftJoin("questions as q", "q.question_id", "r.question_id")
    .leftJoin("categories_question as c", "c.category_id", "q.category_id")
    .where("r.tp_doc_id", id)
    .andWhere("r.is_deleted", 0);
const add = async (data) => await db("results").insert(data);
const update = async (id, data) =>
  db("results").where("result_id", id).update(data);

module.exports = {
  getByTpDoc,
  add,
  update,
};
