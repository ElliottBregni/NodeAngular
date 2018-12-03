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


var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function executeStatement() {
    request = new Request("SELECT * FROM artistID;", function (err) {
        if (err) {
            console.log(err);
        }
    });
    var result = "";
    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                result += column.value + " ";
            }
        });
        console.log(result);
        result = "";
    });

    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
}
/* GET api listing. */
