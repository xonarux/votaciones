const express = require("express");
const {list, createVotacion} = require("./controller");
//const {validateCreateUser} = require("../middlewares/validator");

const router = express.Router();

router.route("/").get(list).post(createVotacion);

module.exports = router;