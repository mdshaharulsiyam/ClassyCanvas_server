const Product = require("../../models/product");

const getNewArrivals = async (req, res, next) => {
  try {
    const { size } = req.query || { size: 10 };
    const products = await Product.find({})
      .sort({ addedDate: 1 })
      .limit(+size)
      .select("images name price");

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getNewArrivals;
