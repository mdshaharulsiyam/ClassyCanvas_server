const { ObjectId } = require("mongodb");
const User = require("../../models/User");

const getSingleUser = async (req, res, next) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    res.send(user);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
module.exports = getSingleUser;
