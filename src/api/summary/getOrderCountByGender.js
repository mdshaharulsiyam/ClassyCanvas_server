const Order = require("../../models/order");

const getOrderCountByGender = async (req, res, next) => {
  try {
    const result = await Order.aggregate([
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
      //   {
      //     $group: {
      //       _id: "$userDetails.gender",
      //       totalSales: {
      //         $avg: "$quantity",
      //       },
      //     },
      //   },
    ]).exec();

    res.send(result);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getOrderCountByGender;
