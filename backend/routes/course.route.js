const routes = require("../controllers/courses.controller");
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courses.controller");

router.post("/", courseController.createCourse);
router.get("/get-courses", courseController.getCourses);
router.get("/:id", courseController.getCourse);

module.exports = router;
