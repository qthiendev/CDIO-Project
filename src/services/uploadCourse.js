const {queryEEB, queryEEBSetOnly} = require('../database/queryEEB');

const uploadCourse = async (req) => {
    try {
        const {
            name,
            level,
            price,
            age,
            level_required,
            duration,
            calendar,
            note
        } = req.query
        console.log(req.query);

        let lastID = (await queryEEB("SELECT TOP 1 course_id FROM COURSE ORDER BY course_id DESC"))[0]['course_id'];
        let nextId = "C" + ("00" + (parseInt(lastID.slice(1)) + 1)).slice(-3);

        let queryAdd = `INSERT INTO COURSE (course_id, 
                course_name, 
                course_path, 
                course_for_age, 
                learn_level_required, 
                course_level, 
                course_duration, 
                course_schedule, 
                course_desc,
                course_price,
                cp_id) 
            VALUES (N'${nextId}', 
                N'${name}', 
                N'/Uploads/cat.jpg', 
                N'${age}', 
                N'${level_required}', 
                N'${level}', 
                N'${duration}', 
                N'${calendar}', 
                N'${note}',
                ${price},
                N'CP001')`;

        console.log(queryAdd)

        await queryEEBSetOnly(queryAdd);
    } catch (err) {
        //console.log('uploadCourse.js | Failed to get Homepage: ', err);
        throw "";
    }
}

module.exports = { uploadCourse };