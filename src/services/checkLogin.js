const { queryEEB } = require('../database/queryEEB');

const escapeSQL = (value) => {
    if (typeof value === 'string') {
        return value.replace(/'/g, "''").replace(/\\/g, "\\\\");
    }
    return value;
};

const checkAccount = async (email, password) => {
    try {
        // Sanitize inputs
        const sanitizedEmail = escapeSQL(email);
        const sanitizedPassword = escapeSQL(password);

        const queryCheck = `SELECT COUNT(*) as count FROM USERS WHERE user_email = '${sanitizedEmail}' AND user_pwd = '${sanitizedPassword}'`;
        const data = await queryEEB(queryCheck);
        return data[0].count > 0;
    } catch (err) {
        throw err;
    }
};


module.exports = { checkAccount };
