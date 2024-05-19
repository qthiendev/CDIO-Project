const {queryEEB} = require('../database/queryEEB');

const getHomePage = async () => {
    try {
        var data = await queryEEB('select * from dbo.COURSE');
        console.log('getHomePage.js | Got Homepage: ');
        return data;
    } catch (err) {
        console.log('getHomePage.js | Failed to get Homepage: ', err);
    }
}

module.exports = { getHomePage };