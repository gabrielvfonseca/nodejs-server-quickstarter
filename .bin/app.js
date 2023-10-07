/*
    DO NOT EXIST
    - DOCUMENTS ELEMENTS
    - WINDOW ELEMENTS
*/

function sayHello(name) {
    console.log('Hello ' + name + '!');
}

sayHello('Gabriel');


/* Global Objects (standard js) */
// window => global

console.log(); // global

setTimeout(); // call a function after a delay
clearTimeout(); // used to stop a function

setInterval(); // call repeatedly a function after a specific delay
clearTimeout(); // used to stop a function to be called repeatedly


/* Global Variables (node) */
var message = "";
console.log(global.message); // error: undefined
// esta variavel apenas está defenida dentro do ficheiro app.js não globalmente, daí quando chamamos global.message => undefined


/* Modules (node) */
console.log(module); // module JSON

const logger = require("./logger"); // podemos colocar o nome do ficheiro onde esta o module que queremos sem o .js, porque o node assume que é js

logger.log("message");

