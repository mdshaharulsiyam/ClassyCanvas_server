const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: new ObjectId(id) });

    res.send(product);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getSingleProduct;
