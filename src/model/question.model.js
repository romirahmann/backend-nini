const db = require("./../database/project.config");

// Questions
const getAllQuestion = async () =>
  await db
    .select(
      "q.question_id",
      "q.faktor_id",
      "q.category_id",
      "q.question",
      "q.is_deleted",
      "f.faktor_description",
      "c.category_name"
    )
    .from("questions as q")
    .leftJoin("categories_question as c", "c.category_id", "q.category_id")
    .leftJoin("faktor_kesebandingan as f", "f.faktor_id", "q.faktor_id")
    .where("q.is_deleted", 0);

const getAllQuestionsByFactor = async (factorId) => {
  const questionsByFactor = await db
    .select(
      "q.question_id",
      "q.faktor_id",
      "q.category_id",
      "q.question",
      "q.is_deleted",
      "f.faktor_description",
      "c.category_name"
    )
    .from("questions as q")
    .leftJoin("categories_question as c", "c.category_id", "q.category_id")
    .leftJoin("faktor_kesebandingan as f", "f.faktor_id", "q.faktor_id")
    .where("q.is_deleted", 0);
  // Menambahkan kondisi where untuk faktor_id yang ditentukan

  // Group pertanyaan berdasarkan faktor_id
  const groupedQuestions = {};
  questionsByFactor.forEach((question) => {
    const { faktor_id, faktor_description, ...rest } = question;
    if (!groupedQuestions[faktor_id]) {
      groupedQuestions[faktor_id] = {
        faktor_id,
        faktor_description,
        questions: [],
      };
    }
    groupedQuestions[faktor_id].questions.push(rest);
  });

  // Ubah objek menjadi array untuk hasil akhir
  const result = Object.values(groupedQuestions);
  return result;
};

const addQuestion = async (data) => await db("questions").insert(data);
const updateQuestion = async (id, data) =>
  await db("questions").where("question_id", id).update(data);

//  Category
const getAllCategory = async () =>
  await db.select("*").from("categories_question");
const addCategory = async (data) =>
  await db("categories_question").insert(data);

module.exports = {
  addCategory,
  addQuestion,
  updateQuestion,
  getAllQuestion,
  getAllCategory,
  getAllQuestionsByFactor,
};
