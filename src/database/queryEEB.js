const { connectionEEB } = require("./connectEEB");

const queryEEB = async (sqlQueryHR) => {
  try {
    const request = connectionEEB.request();
    const results = await request.query(sqlQueryHR);

    console.log('[System] queryEEB.js | Queried HRDB.');

    return results.recordset;
  } catch (error) {
    console.error("[SYSTEM] queryEEB.js | Cannot query HRDB: ", error);
    throw error;
  }
};

const queryEEBSetOnly = async (sqlQueryHR) => {
  try {
    const request = connectionEEB.request();
    await request.query(sqlQueryHR);

    console.log('[System] queryEEB.js | Queried HRDB Set Only.');
  } catch (error) {
    console.error("[SYSTEM] queryEEB.js | Cannot query HRDB Set Only: ", error);
    throw error;
  }
};

module.exports = {
  queryEEB,
  queryEEBSetOnly
};