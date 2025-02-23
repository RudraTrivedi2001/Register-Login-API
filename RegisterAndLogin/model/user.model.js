import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    maxLength: 20
  },
  lastname: {
    type: String,
    trim: true,
    maxLength: 20
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Exporting User model
const User = mongoose.model("User", UserSchema);
export default User;
