// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const exphbs = require("express-handlebars");
// Sets up the Express App
// =============================`================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
// const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Sets up express to use handlebars templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App now listening on ${PORT}`);
});

// // Routes
// // =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
