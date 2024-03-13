const User = require("../../models/User");

const updateUserInfo = async (req, res, next) => {
  try {
    const data = req.body;
    const { email } = req.params;
    const response = await User.updateOne(
      { email },
      {
        $set: data,
      }
    );

    res.send({
      updateOne: response.modifiedCount > 0,
      status: response.acknowledged,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = updateUserInfo;
