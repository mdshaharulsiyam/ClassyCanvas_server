const Brand = require("../../models/brand");

const addBrand = async (req, res, next) => {
  try {
    const data = req.body;

    const brand = new Brand(data);

    await brand.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addBrand;
