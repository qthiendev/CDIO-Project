const {queryEEB} = require('../database/queryEEB');

const getDetailPage = async (id) => {
    try {
        var data = await queryEEB(`select * from dbo.COURSE where course_id = '${id}'`);
        var dataCP = await queryEEB(`select * from [COURSE_PROVIDER] where cp_id = '${data[0]['cp_id']}'`);
        var mergedData = data.map(item => {
            return {...item, ...dataCP.find(cp => cp.cp_id === item.cp_id)};
        });
        
        console.log('getDetailPage.js | Got Homepage: ');
        console.log(mergedData[0]);
        return mergedData[0];
    } catch (err) {
        console.log('getDetailPage.js | Failed to get Homepage: ', err);
    }
}

module.exports = { getDetailPage };