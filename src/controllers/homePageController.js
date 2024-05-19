const { getDetailCourse } = require('../services/getDetailCourse');
const { getHomePage } = require('../services/getHomePage');

const renderHomePage = async (req, res) => {
    try {
        var data = await getHomePage();
        console.log('homePageController.js | Rendered Homepage: ');
        res.render("homePage.ejs", {data});
    } catch (err) {
        console.log('homePageController.js | Failed to render Homepage: ', err);
    }
}

const renderIntroPage = async (req, res) => {
    try {

        res.render("introPage.ejs");

    } catch (err) {
        console.log('Error: ', err);
    }
}

const renderDetailPage = async (req, res) => {
    try {
        let id = req.params;
        var data = await getDetailCourse(id);
        res.render("detailPage.ejs", {
            detailCourse: data
        });
    } catch (err) {
        console.log('Error: ', err);
    }
}

const renderUploadPage = async (req, res) => {
    try {

        res.render("uploadPage.ejs");

    } catch (err) {
        console.log('Error: ', err);
    }
}

const renderLoginPage = async (req, res) => {
    try {

        res.render("login.ejs");

    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { renderHomePage, renderIntroPage, renderDetailPage, renderUploadPage, renderLoginPage }