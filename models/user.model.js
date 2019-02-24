let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const emailValidator = email => {};

let commentSchema = new Schema({
  fullName: {
    type: String
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [emailValidator, "this is not a valid email address"]
  }
});

module.exports = mongoose.model("Comment", commentSchema);
