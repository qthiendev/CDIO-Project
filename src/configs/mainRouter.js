const express = require("express");
const router = express.Router();

const { renderHomePage, renderIntroPage, renderDetailPage, renderUploadPage, renderLoginPage } = require('../controllers/homePageController');

router.get("/Introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/Home", renderHomePage);
router.get("/DetailCourse", renderDetailPage);
router.get("/UploadCourse", renderUploadPage);
router.get("/Login", renderLoginPage);

module.exports = router;