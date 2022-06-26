const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const bcrypt = require('bcrypt')
require("dotenv").config();

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const {name,email,password} = req.body;
  const hashedPass = await bcrypt.hash(password,10)
  //console.log("hashed pass ",hashedPass)
  const user = await User.create({
        name,
        email,
        password : hashedPass,
        avatar: {
          public_id:"this_is_sample",
          url: "picurl",
        },
    });

    sendToken(user,201,res);
  });

//Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
    //console.log(email+" "+password)

    //checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    //console.log(user)
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  //console.log(isPasswordMatched+" match result")
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user,200,res);

});

//logout user
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// // Forgot Password
// exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
//   const user = await User.findOne({ email: req.body.email });

//   if (!user) {
//     return next(new ErrorHandler("User not found", 404));
//   }

// });





