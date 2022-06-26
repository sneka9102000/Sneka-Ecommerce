const express = require("express");
const { registerUser, loginUser,logout, getUserDetails, updatePassword } = require("../controllers/userController");
const { isAuthenticatedUser,authorizesRoles } = require("../middleware/auth")

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser,getUserDetails);
router.route("/password/update").put(isAuthenticatedUser,updatePassword);




module.exports = router;


