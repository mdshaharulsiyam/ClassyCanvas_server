const Product = require("../../models/product");

const getPaginationProduct = async (req, res, next) => {
  try {
    const { page, size } = req.query || {};

    let products = await Product.find({})
      .select("name brand gender available sellCount")
      .skip(+page * +size)
      .limit(+size);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getPaginationProduct;
