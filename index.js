// import express library
const express = require("express");
const cors = require("cors");
const Dbconnection = require("./app/config/db.config");
const Role = require("./app/model/role.model");

//  instantiate the Express app
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "student",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'student' to roles collection");
      });
      new Role({
        name: "teacher",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'teacher' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}
initial();

// app.use(function(req, res, next) {
//   console.log("check");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   console.log("check one");
//   next();
// });

const authRoutes = require("./app/routes/auth.routes");
const userRoutes = require("./app/routes/user.routes");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

// set running port
const port = 4000;

// listen for request
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
