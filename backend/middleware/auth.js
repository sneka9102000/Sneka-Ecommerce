const catchAsyncErrors = require("./catchAsyncErrors");
const ErrorHandler = require ("../utils/errorhandler");
const jwt = require("jsonwebtoken")
require('dotenv').config()
const User = require ("../models/userModel")


exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies;
    // console.log(req.cookies)
    //console.log("token",token);

if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
//  console.log("process token : ",process.env.JWT_SECRET)
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decodedData.id);
  next();

});
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};