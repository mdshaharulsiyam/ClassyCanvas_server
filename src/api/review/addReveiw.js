const Review = require("../../models/review");

const addReview = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data) {
      return res
        .status(400)
        .send({ status: "Bad Request!!", message: "Data required" });
    }

    const review = new Review(data);

    await review.save();

    res.send({
      insertOne: true,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = addReview;
