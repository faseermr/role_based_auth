exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.studentAccess = (req, res) => {
  res.status(200).send("Student Content.");
};
exports.adminAccess = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.teacherAccess = (req, res) => {
  res.status(200).send("Teacher Content.");
};
