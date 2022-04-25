var express = require("express");
var router = express.Router();
var authorization = require("../authorization")

const { findAll, findOne, create, update, delete: remove } = require("../controllers/product");
/* GET users listing. */
router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", authorization, create);
router.delete("/:id", authorization, remove);
router.put("/:id", authorization, update);

module.exports = router;
