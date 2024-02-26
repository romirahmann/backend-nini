var express = require("express");
var router = express.Router();

const UserController = require("../../controller/master_controller/UserController");
const FaktorController = require("../../controller/master_controller/FaktorController");
const QuestionController = require("../../controller/master_controller/QuestionController");
const TpDocController = require("../../controller/master_controller/TpDocController");
const ResultController = require("../../controller/master_controller/ResultController");

// Users
router.post("/register", UserController.register);

// UserRole
router.post("/add-role", UserController.addRole);

// Faktor Kesebandingan
router.post("/faktor", FaktorController.addFaktorKesebandingan);

// Questions
router.get("/questions", QuestionController.getAllQuestions);
router.post("/question", QuestionController.addQuestion);
router.put("/question/:id", QuestionController.updateQuestion);

// Category
router.post("/category", QuestionController.addCategoryQuestion);

// TP DOC
router.get("/tp/:userID", TpDocController.getAllByUserId);
router.put("/update-tp/:id", TpDocController.updateTpDoc);
router.post("/tp", TpDocController.addTpDoc);

// RESULT
router.get("/result-by-tp.:tpId", ResultController.getAllByTpId);
router.put("/update-result/:id", ResultController.updateResult);
router.post("/result", ResultController.addResult);

module.exports = router;
