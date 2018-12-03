var Connection = require('tedious').Connection;
var config = {
    userName: 'jon',
    password: 'jon',
    server: 'desktop-381bn9g',
    // When you connect to Azure SQL Database, you need these next options.  
    //options: { encrypt: true, database: 'MyDatabases' }
};
var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log('e')
    } else {
        console.log("Connected");
    }
});






