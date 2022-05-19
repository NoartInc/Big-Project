var express = require("express");
var router = express.Router();

const { findAll, findOne, create, update, delete: remove } = require("../controllers/order");
const authorization = require("../authorization");
// const orderController = require("../controllers/order");

/* GET users listing. */
router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", authorization, create);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
