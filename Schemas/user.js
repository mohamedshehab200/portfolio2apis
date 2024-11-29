const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String ,
    role: String,
});
userSchema.methods.comparepassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};



module.exports = mongoose.model("User", userSchema)
