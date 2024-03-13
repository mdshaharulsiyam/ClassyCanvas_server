const Favorite = require("../../models/favorite");

const addFavorite = async (req, res, next) => {
  try {
    const data = req.body;
    const favoriteProduct = new Favorite(data);

    await favoriteProduct.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addFavorite;
