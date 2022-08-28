const db = {};
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["student", "admin", "teacher"];

module.exports = db;
