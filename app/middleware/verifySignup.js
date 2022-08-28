const db = require("../model/index");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
  console.log("req.body", req.body);
  // Username
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    console.log("err", err, "user", user);
    if (err) {
      //console.log("err", err);
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      //  console.log("user", user);
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    next();
  });
};

checkDuplicateEmail = (req, res, next) => {
  // Email
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }
  next();
};
const verifySignUp = {
  checkDuplicateUsername,
  checkDuplicateEmail,
  checkRolesExisted,
};
module.exports = verifySignUp;
