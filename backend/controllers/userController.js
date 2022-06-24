const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
require("dotenv").config();

// Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const {name,email,password} = req.body;

  const user = await User.create({
        name,
        email,
        password,
        avatar: {
          public_id:"this_is_sample",
          url: "picurl",
        },
    });

    const token = user.getJWTToken();

    res.status(201).json({
        success: true,
        token,
      });
    });

//Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const token  = user.getJWTToken();

  res.status(200).json({
    success:true,
    token,
  });

});
