const express = require("express");
const router = express.Router();

const { renderHomePage, 
    renderIntroPage, 
    renderDetailPage, 
    renderUploadPage, 
    renderLoginPage,
    renderSearchPage,
    uploadingCourse,
} = require('../controllers/controller');

router.get("/Introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/Home", renderHomePage);
router.get("/DetailCourse", renderDetailPage);
router.get("/UploadCourse", renderUploadPage);
router.get("/UploadCourse", renderUploadPage);
router.get("/UploadingCourse", uploadingCourse);
router.get("/Login", renderLoginPage);
router.get("/Search", renderSearchPage);

module.exports = router;