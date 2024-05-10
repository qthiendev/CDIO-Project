const express = require("express");
const router = express.Router();

const { renderHomePage } = require('../controllers/homePageController');

router.get("/", renderHomePage);

module.exports = router;