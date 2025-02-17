import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  img:{ type: String, required: false ,default:""},
  
  profileSetup: { type: Boolean, required: false, default:false },
});

const User = mongoose.model("User", userSchem);

export default User;
