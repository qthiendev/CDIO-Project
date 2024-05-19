const {queryEEB} = require('../database/queryEEB');

const getDetailPage = async (id) => {
    try {
        var data = await queryEEB(`select * from dbo.COURSE where course_id = '${id}'`);
        console.log('getDetailPage.js | Got Homepage: ');
        return data[0];
    } catch (err) {
        console.log('getDetailPage.js | Failed to get Homepage: ', err);
    }
}

module.exports = { getDetailPage };