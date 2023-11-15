const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true, minlength: 1 },
  minX: { type: Number, required: true, min: 0 },
  maxX: { type: Number, required: true, min: 0 },
  minY: { type: Number, required: true, min: 0 },
  maxY: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model("Character", characterSchema);
