const { getHomePage } = require('../services/getHomePage');
const { getDetailPage } = require('../services/getDetailPage');
const { getSearchPage } = require('../services/getSearchPage');

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
        console.log(req.query.id);
        var data = await getDetailPage(req.query.id);
        res.render("detailPage.ejs", {data});
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

const renderSearchPage = async (req, res) => {
    try {
        var data = await getSearchPage(req.query['search-text']);
        res.render("searchPage.ejs", {data});
    } catch (err) {
        console.log('Error: ', err);
    }
}

module.exports = { renderHomePage, renderIntroPage, renderDetailPage, renderUploadPage, renderLoginPage, renderSearchPage }