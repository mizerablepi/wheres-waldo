const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accountSchema = new Schema({
  username: { type: String, minlength: 1, required: true, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model("Account", accountSchema);
