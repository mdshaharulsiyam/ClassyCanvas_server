const Brand = require("../../models/brand");

const getAllBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find({});

    res.send(brands);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getAllBrands;
