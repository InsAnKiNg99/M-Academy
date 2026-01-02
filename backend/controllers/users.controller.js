const users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const generateToken = (user) => {
  const payload = { id: user._id }
  return jwt.sign(payload , process.env.JWT_SECRET, {
    expiresIn: "100h",
  });
};
const getUser = async (req, res) => {
  try { 
    const { name, email } = req.body;
    const user = await users.get({ name, email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email }, { isDeleted: false });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await users.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findOne({ email });
    
    if (!user) {
      console.log("Invalid Email or Password");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json(user);
  } catch (error) {}
};

module.exports = {
  createUser,
  getUser,
  findUser,
};
