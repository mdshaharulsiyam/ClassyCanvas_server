const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const deleteSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Product.deleteOne({ _id: new ObjectId(id) });

    res.send({
      status: response.acknowledged,
      deleteOne: response.deletedCount > 0,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteSingleProduct;
