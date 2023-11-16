const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scoreSchema = new Schema({
  username: { type: String, required: true, minlength: 1 },
  time: { type: Number, required: true, min: 0 },
  map: { type: String, required: true, minlength: 1 },
  date: { type: Date, required: true },
});
module.exports = mongoose.model("Score", scoreSchema);
