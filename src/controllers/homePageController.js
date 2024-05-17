const { getHomePage } = require('../services/getHomePage');

const renderHomePage = async (req, res) => {
    try {

        res.render("homePage.ejs");

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

        res.render("detailPage.ejs");

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

module.exports = { renderHomePage, renderIntroPage, renderDetailPage, renderUploadPage }