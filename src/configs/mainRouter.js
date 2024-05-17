const express = require("express");
const router = express.Router();

const { renderHomePage, renderIntroPage, renderDetailPage, renderUploadPage, renderLoginPage } = require('../controllers/homePageController');

router.get("/introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/detail_course", renderDetailPage);
router.get("/upload_course", renderUploadPage);
router.get("/login", renderLoginPage);

module.exports = router;