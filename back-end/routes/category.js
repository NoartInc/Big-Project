var express = require("express");
var router = express.Router();

const { findAll, findOne, create, update, delete: remove } = require("../controllers/category");
// const categoryController = require("../controllers/category");
const auth = require("../authorization");

/* GET users listing. */
router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", create, auth);
router.delete("/:id", remove, auth);
router.put("/:id", update, auth);

module.exports = router;
