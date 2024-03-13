const Favorite = require("../../models/favorite");

const getFavoriteStatus = async (req, res, next) => {
  try {
    const { email, productID } = req.query;

    const status = await Favorite.findOne({
      userEmail: email,
      product: productID,
    });

    res.send({
      found: status ? true : false,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getFavoriteStatus;
