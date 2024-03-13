const Product = require("../models/product");
const Order = require("../models/order");

const getTotalSales = async () => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSale: {
            $sum: "$quantity",
          },
        },
      },
    ]).exec();

    const totalSale = result && result[0]?.totalSale;
    return totalSale;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = getTotalSales;
