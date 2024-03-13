const Product = require("../../models/product");

const getTotalProductCount = async (req, res, next) => {
  try {
    const productCount = await Product.estimatedDocumentCount();

    res.send({
      productCount,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getTotalProductCount;
