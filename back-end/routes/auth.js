var express = require("express");
var router = express.Router();

const { register, login } = require("../controllers/auth");
/* GET users listing. */
// router.get("/", findAll);
// router.get("/:id", findOne);
router.post("/login", login);
router.post("/register", register);
// router.delete("/:id", remove);
// router.put("/:id", update);

module.exports = router;
