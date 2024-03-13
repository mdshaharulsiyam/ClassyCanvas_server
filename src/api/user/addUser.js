const User = require("../../models/User");

const addUser = async (req, res, next) => {
  try {
    console.log("addUser");
    console.log(req.body);
    // console.log(req);
    const data = req.body;

    const user = new User(data);

    await user.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addUser;
