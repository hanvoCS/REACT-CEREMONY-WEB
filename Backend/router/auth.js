const router = require("express").Router();
const User = require("../model/user");
const validator = require("validator");
const bcrypt = require("bcryptjs");

//Register router
router.post("/register", async (req, res) => {
  try {
    const obj = JSON.parse(req.body.data);
    
    console.log(obj);
    const user_name = obj.user_name;
    const email = obj.email;
    const password = obj.password;
    const passwordCon = obj.passwordCon;
    const phone = obj.phone;    
    if (!(email && user_name && password && passwordCon && phone))
      res.status(400).send(obj);
    if (!validator.isEmail(email))
      res.status(400).send("Please make a valid Email!!!");
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      res.status(403).send("User already exist, Please go to login");
    }
    if (password !== passwordCon) {
      res
        .status(400)
        .send("Please check your Password and confirmation Password");
    } else {
      const encryptedpassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        user_name,
        email: email.toLowerCase(),
        password: encryptedpassword,
        phone,
      });
      user.password = undefined;
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

// Login Route root
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const obj = JSON.parse(req.body.data);
    console.log(obj);
    const { user_name, password } = obj;
    
    if (!(user_name && password)) {
      const err = "All inputs required!!!";
      res.status(400).json(err);
    }
    if (validator.isEmail(user_name)) {
      const existUser = await User.findOne({ email: user_name.toLowerCase() });
      
      if (existUser && (await bcrypt.compare(password, existUser.password))) {
        existUser.password = undefined
        res.status(200).json(existUser);
      } else {
        const err = "There are problem with user_name or Password";
        res.status(400).json(err);
      }
    }   
  } catch (err) {
    res.status(454).send(err);
  }
});


module.exports = router;
