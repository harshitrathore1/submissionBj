const express = require("express");
const { handlePost, handleGet } = require("../utils/helpers");

const router = express.Router();

// POST route
router.post("/", handlePost);

// GET route
router.get("/", handleGet);

module.exports = router;
