const mongoose = require("mongoose");
const key = require("./keys");

//Connecting to the database
mongoose.connect(
  key.MONGO_CONNECTION_STRING
  //     {
  //     useNewUrlParser: true,
  //     useCreateIndex: true
  //   }
);
mongoose.Promise = global.Promise;
let connection = mongoose.connection;

//Check for Errors
connection.on("error", (err) => {
  if (err) {
    console.log(err);
  }
});

//Check for connections
connection.once("open", () => {
  console.log(`connection successful!`);
});

//module.exports = connection;
