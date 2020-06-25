const userCtrl = {};
const User = require("../models/user");
const passport = require("passport");

userCtrl.renderSignupForm = (req, res) => {
  res.render("users/signup");
};

userCtrl.signup = async (req, res) => {
  const errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "passwords do not match" });
  }
  if (password.length < 4) {
    errors.push({ text: "passwords must be at least 4 characters" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
    });
  } else {
    const emailUser = await User.findOne({ email: email }).lean();
    if (emailUser) {
      req.flash("error_msg", "the email is already taken");
      res.redirect("/users/signup");
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptpassword(password);
      await newUser.save();
      req.flash("success_msg", "you are registred");
      res.redirect("/users/signin");
    }
  }
};

userCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

userCtrl.signin = passport.authenticate("local", {
  failureRedirect: "/users/signin",
  successRedirect: "/notes",
  failureFlash: true,
});

userCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "you are Logout");
  res.redirect("/");
};

module.exports = userCtrl;
