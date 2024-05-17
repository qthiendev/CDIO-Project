const express = require("express");
const router = express.Router();

const { renderHomePage, renderIntroPage, renderDetailPage } = require('../controllers/homePageController');

router.get("/introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/detail_course", renderDetailPage);

module.exports = router;