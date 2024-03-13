const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const getProductFilter = async (req, res, next) => {
  try {
    const { page, size } = req.query || {};

    const { minPrice: min, maxPrice: max, ...rest } = req.body || {};

    const filterObject = {};

    Object.keys(rest).forEach((key) => {
      if (rest[key].length > 0) {
        filterObject[key] = {
          $in: rest[key],
        };
      }
    });

    let products = await Product.find({
      price: {
        $gte: min,
        $lte: max,
      },
      ...filterObject,
    })
      .select("name price images brand available gender")
      .skip(page * size)
      .limit(size);

    res.send(products);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getProductFilter;
