const model = require("../../model/question.model");
const api = require("../../tools/common");

// Question
const getAllQuestions = async (req, res) => {
  try {
    let data = await model.getAllQuestion();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const addQuestion = async (req, res) => {
  const newQuestions = req.body;
  try {
    let data = await model.addQuestion(newQuestions);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateQuestion = async (req, res) => {
  const { id } = req.params;
  const newQuestions = req.body;
  try {
    let data = await model.updateQuestion(id, newQuestions);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
// Category
const getAllCategories = async (req, res) => {
  try {
    let data = await model.getAllCategory();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const addCategoryQuestion = async (req, res) => {
  const newCategroy = req.body;
  try {
    let data = await model.addCategory(newCategroy);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getAllQuestionsByFactor = async (req, res) => {
  try {
    let data = await model.getAllQuestionsByFactor();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  addCategoryQuestion,
  addQuestion,
  updateQuestion,
  getAllQuestions,
  getAllCategories,
  getAllQuestionsByFactor,
};
