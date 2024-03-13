const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
    required: true,
  },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
