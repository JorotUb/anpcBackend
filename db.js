const mysql = require('mysql');
const fs = require('fs');

var config =
{
    host: "anpc.mysql.database.azure.com",
    user: "anpcAzure",
    password: "parolaAzure!",
    database: 'db_anpc',
    port: 3306,
    ssl: {ca: fs.readFileSync("DigiCertGlobalRootCA.crt.pem")}
};

const connection = new mysql.createConnection(config);

connection.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});

module.exports = connection;