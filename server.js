//Dependencies//
const express = require("express");
const http =require('http');
const path =require ('path');
const bodyParser = require("body-parser");
var mysql = require('mysql');
const { Server } = require("https");
const inquirer = require("inquirer");
var router = express.Router();
// var connection  = require('./lib/db');
//PORTS//
var app =express();
var PORT = 3309;
// Sets up the Express app to handle data parsing and security functions
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')));
//Set up DB //
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3309,
    user: 'root',
    password:'Nikamaxik1605!',
    database: 'boston'
});
// connection.connect(function(err) {
//     if (err) {throw err;
//     } else { console.log ("all good with connection")}
// });

// connection.connect(function(err) {
//     if (err) {
//     console.log("connecting err:" + err);
//     }
// viewAll();
// })

//    ////////display all colleges////////
//  function viewAll() {
//      inquirer.prompt ([
//          {
//          type: "confirm",
//          name: "confirm",
//          message: " Would you like to view all about the colleges in MA?",
//         default: true
//         }
//      ]).then(function(user) {
//          if (user.confirm=== true) {
//              connection.query("SELECT colleges.colleges_id, colleges.name_id, location.location_id, location.address FROM boston.colleges INNER JOIN boston.location ON boston.colleges.name_id=boston.location.name_id", function (err, data){
// if (err) throw err;
// console.table(data);
// // askForID(data);
//              });
//          }else {
//              console.log("Please Return again. We appreciate your Business");
//          }
//      })
//     };
// //Insert a record in the "location" table:
//     function viewAll() {
//         inquirer.prompt ([
//             {
//             type: "confirm",
//             name: "confirm",
//             message: " Would you like to insert a record in the table?",
//            default: true
//            }
//         ]).then(function(user) {
//             if (user.confirm=== true) {
//                 connection.query("INSERT INTO location(location_id, location.name_id, address) VALUES ('436', 'Berklee College of Music', 'Boston, MA 02215')",
//                  function (err, result){
//    if (err) throw err;
//    console.log("Number of records inserted: " + result.affectedRows);
//    // askForID(data);
//                 });
//             }else {
//                 console.log("1 record inserted");
//             }
//         })
//        };

    //    connection.connect(function(err) {
    //     if (err) throw err;
    //     connection.query("SELECT * FROM location WHERE address = 'Boston, MA 02215'", function (err, result) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    //   });


      connection.connect(function(err) {
        if (err) throw err;
        var sql = "UPDATE location SET address = 'Canyon 123' WHERE address = 'MA'";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
      });

