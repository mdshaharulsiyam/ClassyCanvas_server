const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const getSuggestProduct = async (req, res, next) => {
  try {
    const { brand } = req.query;

    const products = await Product.find({ brand });
    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getSuggestProduct;
