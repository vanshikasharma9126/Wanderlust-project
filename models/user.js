const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let passportLocalMongoose = require("passport-local-mongoose");

// Fix if package is imported as object instead of function
if (passportLocalMongoose.default) {
  passportLocalMongoose = passportLocalMongoose.default;
}

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);