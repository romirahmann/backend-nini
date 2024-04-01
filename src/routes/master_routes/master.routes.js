var express = require("express");
var router = express.Router();

const UserController = require("../../controller/master_controller/UserController");
const FaktorController = require("../../controller/master_controller/FaktorController");
const QuestionController = require("../../controller/master_controller/QuestionController");
const TpDocController = require("../../controller/master_controller/TpDocController");
const ResultController = require("../../controller/master_controller/ResultController");

// Users
router.get("/users", UserController.getAllUsers);
router.post("/register", UserController.register);
router.put("/user/:id", UserController.updateUsers);

// UserRole
router.post("/add-role", UserController.addRole);

// Faktor Kesebandingan
router.get("/faktors", FaktorController.getAllFaktor);
router.post("/faktor", FaktorController.addFaktorKesebandingan);

// Questions
router.get("/questions", QuestionController.getAllQuestions);
router.post("/question", QuestionController.addQuestion);
router.put("/question/:id", QuestionController.updateQuestion);
router.get("/questionsByFaktor", QuestionController.getAllQuestionsByFactor);

// Category
router.get("/categories", QuestionController.getAllCategories);
router.post("/category", QuestionController.addCategoryQuestion);

// TP DOC
router.get("/tp/:userID", TpDocController.getAllByUserId);
router.get("/detail-tp/:id", TpDocController.getAllByTpId);
router.put("/update-tp/:id", TpDocController.updateTpDoc);
router.post("/tp", TpDocController.addTpDoc);

// RESULT
router.get("/result-by-tp/:tpId", ResultController.getAllByTpId);
router.put("/update-result/:id", ResultController.updateResult);
router.post("/result", ResultController.addResult);
router.get("/result-by-faktor/:id", ResultController.getAllResultGroupByFakor);

module.exports = router;
