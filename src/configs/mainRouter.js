const express = require("express");
const router = express.Router();

const { renderHomePage, 
    renderIntroPage, 
    renderDetailPage, 
    renderUploadPage, 
    renderLoginPage,
    renderSearchPage,
} = require('../controllers/controller');

router.get("/Introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/Home", renderHomePage);
router.get("/DetailCourse", renderDetailPage);
router.get("/UploadCourse", renderUploadPage);
router.get("/Login", renderLoginPage);
router.get("/Search", renderSearchPage);

module.exports = router;