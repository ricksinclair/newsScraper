let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  comments: Array
});

module.exports = mongoose.model("story", storySchema);
