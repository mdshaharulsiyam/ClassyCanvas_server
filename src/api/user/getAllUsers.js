const Product = require("../../models/product");
const User = require("../../models/User");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("_id name email role");

    res.send(users);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getAllUsers;
