const { queryEEB, queryEEBSetOnly } = require("../database/queryEEB");
const sql = require("mssql");

const getDetailCourse = async (id) => {
  try {
    // Basic input sanitization (adjust as needed)
    const sanitizedId = id.trim(); // Remove leading/trailing whitespace

    const query = 'SELECT * FROM dbo.COURSE WHERE id = @id';
    const params = [{ name: 'id', type: sql.NVarChar, value: sanitizedId }];

    const data = await queryEEB(query, params);
    console.log(data);
    return data;
  } catch (err) {
    console.log('Error fetching course details: ', err); 
    // Handle error more specifically if needed
  }
};

// Test the function (optional)
getDetailCourse('C003');

module.exports = { getDetailCourse };