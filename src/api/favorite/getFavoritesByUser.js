const Favorite = require("../../models/favorite");

const getFavoritesByUser = async (req, res, next) => {
  try {
    const { email } = req.query || {};

    if (!email) {
      res.status(400).send({ message: "BAD REQUEST! Email query is required" });
    }

    const products = await Favorite.find({ userEmail: email }).populate(
      "product"
    );

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getFavoritesByUser;
