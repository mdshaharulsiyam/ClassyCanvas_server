const { ObjectId } = require("mongodb");
const User = require("../../models/User");

const deleteSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await User.deleteOne({ _id: new ObjectId(id) });

    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteSingleUser;
