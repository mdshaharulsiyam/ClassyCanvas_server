const { ObjectId } = require("mongodb");
const Cart = require("../../models/Cart");

const getCartTotals = async (req, res, next) => {
  try {
    const { id } = req.params;

    const pipeline = [
      {
        $match: { user: new ObjectId(id) },
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $unwind: "$productDetails",
      },
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" },
          totalDiscount: {
            $sum: {
              $multiply: [
                "$quantity",
                {
                  $multiply: ["$price", "$productDetails.discount", 0.01],
                },
              ],
            },
          },
        },
      },
    ];

    const response = await Cart.aggregate(pipeline);

    res.send(response);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
module.exports = getCartTotals;
