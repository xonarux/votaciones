const express = require("express");
const {list, createVotacion} = require("./controller");
//const {validateCreateUser} = require("../middlewares/validator");
const uploadFile = require("../middlewares/index");
const router = express.Router();

router.route("/").get(list).post(uploadFile(), createVotacion);

module.exports = router;