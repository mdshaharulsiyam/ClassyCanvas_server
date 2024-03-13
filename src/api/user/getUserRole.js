const User = require("../../models/User");

const getUserRole = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email }).select("role -_id");

    res.send(user);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getUserRole;
