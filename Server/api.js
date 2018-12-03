const express = require('express');
const router = express.Router();
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var Connection = require('tedious').Connection;

var config = {
    userName: 'jon',
    password: 'jon',
    server: 'desktop-381bn9g',
    // When you connect to Azure SQL Database, you need these next options.  
    options: { encrypt: true, database: 'SBG' }
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


function executeStatement(sql) {
    request = new Request(sql, function (err) {
        if (err) {
            console.log(err);
        }
    });
    /*Result set */
    request.on('done', function (rowCount, more) {
        console.log(rowCount + ' rows returned');
    });
    connection.execSql(request);
}  
/*starting point*/
router.get('/', (req, res) => {
    
    res.send("api works");

});
/*api/artwork/*/
router.get('/UserID', (req, res) => {
    var sql = "SELECT * FROM ArtistID FOR JSON AUTO"
    
    res.send(executeStatement(sql));
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
});


router.put('/artwork', (req, res) => {
    var sql = "INSERT INTO ARTISTID (Artistid) VALUES (@id)"
    request = new Request(sql, function (err) {
        if (err) {
            console.log(err);
        }
    });
    request.addParameter('id', TYPES.VarChar, '123');
    connection.execSql(request);
});

module.exports = router;