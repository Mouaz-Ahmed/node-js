const fs = require('fs')    // file system
const http = require('http')
var colors = require('colors');
// * how to import those x,y values which are in app.js
// const app = require("./app");
// console.log(app.x)

// *  Core Module 
// two types of core module 1)=> global module 2)=> non-global module

// 1) global module {
// console.log("hello world");
// yha pr hmain console lo import krane ki zroorat nhi to ye global module he
// }

// 2) non global module {
    // FileSystem() fs.writeFileSyncs("hello.txt", "helllo mouaz")
    // fs.writeFileSync("hello2.txt","hello world2")
    // yha pr hmain fs import krana prega wrna error aega to ye non global module he
// }

// * MAKE BASIC SERVER
// http.createServer((req,res)=>{
//     res.write("<h1> HELLO MOUAZ ,there </h1>");
//     res.end();
// }).listen(4500);  // localhost:4500
// this is how we create basic server

// * pakage.json {  
// console.log("this is an error".blue);
//  console.log("this is an error".bgBlue);
//  }

// * nodemon 
// In terminal nodemon then index.js to ctrl+s se safe krna bs br br node index.js likhne ki zrorat nhi

// console.log(process.argv);
const input = process.argv;
fs.writeFileSync(input[2])






// var a = 10;
// var b = 10;
// var c = 10;
// console.log(a-b+c);
// array,loops,ifElse statement are same as js