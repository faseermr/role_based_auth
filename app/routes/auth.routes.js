const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controller/auth.controller");
const {
  checkDuplicateUsername,
  checkDuplicateEmail,
  checkRolesExisted,
} = require("../middleware/verifySignup");

router.post(
  "/signup",
  checkDuplicateUsername,
  checkDuplicateEmail,
  ///checkRolesExisted,
  signup
);

router.post("/signin", signin);

module.exports = router;
