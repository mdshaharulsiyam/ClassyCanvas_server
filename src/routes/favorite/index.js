const addFavorite = require("../../api/favorite/addFavorite");
const deleteFavorite = require("../../api/favorite/deleteFavorite");
const getFavoriteStatus = require("../../api/favorite/getFavoriteStatus");
const getFavoritesByUser = require("../../api/favorite/getFavoritesByUser");

const router = require("express").Router();

// GET
router.get("/favorites", getFavoritesByUser);
router.get("/favorite-status", getFavoriteStatus);

// POST
router.post("/favorite", addFavorite);

// DELETE
router.delete("/favorite", deleteFavorite);

module.exports = router;
