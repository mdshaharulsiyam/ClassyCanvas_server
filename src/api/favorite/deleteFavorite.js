const { ObjectId } = require("mongodb");
const Favorite = require("../../models/favorite");

const deleteFavorite = async (req, res, next) => {
  try {
    const { email, productID } = req.query;

    const response = await Favorite.deleteOne({
      product: new ObjectId(productID),
      userEmail: email,
    });

    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteFavorite;
