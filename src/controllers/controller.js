const { getHomePage } = require('../services/getHomePage');
const { getDetailPage } = require('../services/getDetailPage');
const { getSearchPage } = require('../services/getSearchPage');
const { uploadCourse } = require('../services/uploadCourse');
const { checkAccount } = require('../services/checkLogin');

const renderHomePage = async (req, res) => {
    try {
        var data = await getHomePage();
        console.log('homePageController.js | Rendered Homepage: ');
        res.render("homePage.ejs", { data });
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
        res.render("detailPage.ejs", { data });
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

const uploadingCourse = async (req, res) => {
    try {
        await uploadCourse(req);
        res.redirect('/');
    } catch (err) {
        //console.log('Error: ', err);
        res.redirect('/UploadCourse');
    }
}

const renderLoginPage = async (req, res) => {
    try {
        res.render("login.ejs", {errorMessage: ""});
    } catch (err) {
        console.log('Error: ', err);
    }
}

const renderSearchPage = async (req, res) => {
    try {
        var data = await getSearchPage(req.query['search-text']);
        res.render("searchPage.ejs", { data });
    } catch (err) {
        console.log('Error: ', err);
    }
}
const handleLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.pwd;
        let isLogedIn = await checkAccount(email, password);
        if (isLogedIn) {
            console.log('homePageController.js | Rendered Homepage: ');
            res.redirect("/Home");
        } else {
            // Pass an error message to the login page
            res.render('login.ejs', { errorMessage: 'Incorrect email or password' });
        }
    } catch (error) {
        console.log('Error: ', error);
        res.render('login.ejs', { errorMessage: 'An error occurred. Please try again.' });
    }
};



module.exports = { renderHomePage, handleLogin, renderIntroPage, renderDetailPage, renderUploadPage, renderLoginPage, renderSearchPage, uploadingCourse }