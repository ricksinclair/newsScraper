let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Comment", commentSchema);
