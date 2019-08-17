const pg = require("pg");
const Pool = pg.Pool;
const config = {
  database: "react_gallery", //name of the SQL database
  host: "localhost", //database is hosted locally
  port: 5432, //port number the database is using
  max: 10, //max connection that can happen simultaneously
  idleTimeoutMillis: 30000 //how long will a page wait before timing out
};

const pool = new Pool(config);

pool.on("connect", client => {
  console.log("CONNECTED");
});

pool.on("error", (err, client) => {
  console.log("Unexpected error on idle", err);
  //exits from the current Node.js process
  process.exit(-1);
});

module.exports = pool; 
