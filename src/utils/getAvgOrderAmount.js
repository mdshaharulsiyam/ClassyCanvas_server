const Order = require("../models/order");

const getAvgOrderAmount = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          avgOrderAmount: { $avg: "$quantity" },
        },
      },
    ]);
    // const totalSale = result && result[0]?.totalSale;

    const avgOrderAmount = result && result[0]?.avgOrderAmount;
    return avgOrderAmount;
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = getAvgOrderAmount;
