var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/test-api-route", function(req, res) {
    console.log("success you've hit the route");
  });
};
