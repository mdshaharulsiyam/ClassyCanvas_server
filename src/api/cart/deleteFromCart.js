const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const deleteFromCart = async (req, res, next) => {
  try {
    const ids = req.body;

    const objectIds = ids?.map((id) => new ObjectId(id)) || [];

    const response = await Cart.deleteMany({ _id: { $in: objectIds } });
    // console.log(response);
    res.send({
      status: response.acknowledged,
      deleteAll: response.deletedCount === ids.length,
      deleteCount: response.deletedCount,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = deleteFromCart;
