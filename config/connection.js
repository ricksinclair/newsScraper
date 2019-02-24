//require mongoose library
const mongoose = require("mongoose");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
let MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

///export mongo functionality.

module.exports = function(app) {
  mongoose.connect(MONGODB_URI);
};
