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
      "q.category_id",
      "q.question",
      "f.faktor_id",
      "f.faktor_description",
      "c.category_name"
    )
    .from("results as r")
    .leftJoin("questions as q", "q.question_id", "r.question_id")
    .leftJoin("faktor_kesebandingan as f", "f.faktor_id", "q.faktor_id")
    .leftJoin("categories_question as c", "c.category_id", "q.category_id")
    .where("r.tp_doc_id", id)
    .andWhere("r.is_deleted", 0);

const getResultGrouByTpDoc = async (id) => {
  const resultsByFactor = await db
    .select(
      "r.tp_doc_id",
      "r.question_id",
      "r.transaksi_afiliasi",
      "r.transaksi_independent",
      "r.description",
      "r.no_halaman",
      "q.category_id",
      "q.question",
      "f.faktor_id",
      "f.faktor_description",
      "c.category_name"
    )
    .from("results as r")
    .leftJoin("questions as q", "q.question_id", "r.question_id")
    .leftJoin("faktor_kesebandingan as f", "f.faktor_id", "q.faktor_id")
    .leftJoin("categories_question as c", "c.category_id", "q.category_id")
    .where("r.tp_doc_id", id)
    .andWhere("r.is_deleted", 0);

  const groupedQuestions = {};
  resultsByFactor.forEach((result) => {
    console.log(result);
    const { faktor_id, faktor_description, ...rest } = result;
    if (!groupedQuestions[faktor_id]) {
      groupedQuestions[faktor_id] = {
        faktor_id,
        faktor_description,
        results: [],
      };
    }
    groupedQuestions[faktor_id].results.push(rest);
  });

  // Mengubah objek menjadi array
  const groupedQuestionsArray = Object.values(groupedQuestions);
  return groupedQuestionsArray;
};

const add = async (data) => await db("results").insert(data);
const update = async (id, data) =>
  db("results").where("result_id", id).update(data);

module.exports = {
  getByTpDoc,
  add,
  update,
  getResultGrouByTpDoc,
};
