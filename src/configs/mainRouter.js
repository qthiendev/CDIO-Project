const express = require("express");
const router = express.Router();
const path = require('path')
var multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './src/public/uploads/');
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
      }
    })
});

const { renderHomePage,
    renderIntroPage,
    renderDetailPage,
    renderUploadPage,
    renderLoginPage,
    renderSearchPage,
    uploadingCourse,
    handleLogin,
} = require('../controllers/controller');

router.get("/Introduction", renderIntroPage);
router.get("/", renderHomePage);
router.get("/Home", renderHomePage);
router.get("/DetailCourse", renderDetailPage);
router.get("/UploadCourse", renderUploadPage);
router.post("/UploadingCourse", upload.single('main-img'),  uploadingCourse);
router.get("/Login", renderLoginPage); // GET request to render the login page
router.post("/Login", handleLogin); // POST request to handle the login form submission
router.get("/Search", renderSearchPage);

module.exports = router;