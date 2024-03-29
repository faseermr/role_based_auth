const express = require("express");
const router = express.Router();
const { isAdmin, isTeacher, verifyToken } = require("../middleware/authJwt");
const controller = require("../controller/user.controller");

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

// };

router.get("/all", controller.allAccess);
router.get("/student", [verifyToken], controller.studentAccess);
router.get("/teacher", [verifyToken, isTeacher], controller.teacherAccess);
router.get("/admin", [verifyToken, isAdmin], controller.adminAccess);

module.exports = router;
