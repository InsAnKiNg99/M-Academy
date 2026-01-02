const routes = require("../controllers/users.controller");
const express = require("express");
const router = express.Router();

router.post("/create-user", routes.createUser);
router.get("/get-user", routes.getUser);
router.post("/login", routes.findUser);

module.exports = router;
