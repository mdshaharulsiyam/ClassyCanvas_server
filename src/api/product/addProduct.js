const Product = require("../../models/product");
const Brand = require("../../models/brand");

const addProduct = async (req, res, next) => {
  try {
    const data = req.body;
    console.log("hitted");
    const product = new Product(data);

    await product.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addProduct;
