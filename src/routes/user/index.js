const addUser = require("../../api/user/addUser");
const deleteSingleUser = require("../../api/user/deleteSingleUser");
const getAllUsers = require("../../api/user/getAllUsers");
const getSingleUser = require("../../api/user/getSingleUser");
const getUserRole = require("../../api/user/getUserRole");
const updateUserInfo = require("../../api/user/updateUserInfo");

const router = require("express").Router();

// GET
router.get("/user/:email", getSingleUser);
router.get("/user/role/:email", getUserRole);
router.get("/users", getAllUsers);

// POST
router.post("/user", addUser);

// PUT
router.put("/users/:email", updateUserInfo);

// DELETE
router.delete("/user/:id", deleteSingleUser);

module.exports = router;
