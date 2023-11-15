const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Character = require("../models/Character");

const mapSchema = new Schema({
  name: { type: String, required: true, minlength: 1, unique: true },
  characters: [{ type: Schema.Types.ObjectId, required: true, ref: Character }],
});

module.exports = mongoose.model("Map", mapSchema);
