const { getHomePage } = require('../services/getHomePage');

const renderHomePage = async (req, res) => {
    try {

        res.render("homePage.ejs");

    } catch(err) {
        console.log('homePageController.js | Failed to render Homepage: ', err);
    }
}

module.exports = { renderHomePage }