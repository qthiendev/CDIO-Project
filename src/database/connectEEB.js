const sql = require("mssql");

const config = {
  driver: "msnodesqlv8",
  user: "sa",
  password: "123456",
  server: "localhost",
  database: "EEB",
  options: {
    port: 1433,
    encrypt: true,
    trustServerCertificate: true,
  },
};

const connectionEEB = new sql.ConnectionPool(config);

connectionEEB
  .connect()
  .then((pool) => {
    console.log("[SYSTEM] Connected to SQL Server | EEB.");
  })
  .catch((err) => {
    console.error("[SYSTEM] Cannot connect to SQL Server | EEB: ", err);
  });

module.exports = { connectionEEB };
