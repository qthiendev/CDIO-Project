const {queryEEB} = require('../database/queryEEB');

const getHomePage = async () => {
    try {
        var data = await queryEEB('select * from dbo.COURSE_PROVIDER');
        console.log(data)
        console.log('getHomePage.js | Got Homepage: ');
        return data;
    } catch (err) {
        console.log('getHomePage.js | Failed to get Homepage: ', err);
    }
}

module.exports = { getHomePage };