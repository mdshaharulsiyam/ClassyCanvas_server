const { ObjectId } = require("mongodb");
const Product = require("../../models/product");

const increaseProductSellCount = async (productID, quantity) => {
  try {
    const product = await Product.findOne({ _id: new ObjectId(productID) });

    const response = await Product.updateOne(
      { _id: new ObjectId(productID) },
      {
        $set: {
          sellCount: product.sellCount + quantity,
        },
      }
    );

    return response.modifiedCount > 0;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = increaseProductSellCount;
