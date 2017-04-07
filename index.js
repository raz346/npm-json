var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);
var message2 = "How" + chalk.bold(" you doin ") ;
console.log(message2);

var message3 = "How" + chalk.dim.underline(" you doin ") ;
console.log(message3);

var message4 = "Who let the" + chalk.bgRed.white(" dogs ") + " out" ;
console.log(message4);