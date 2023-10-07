/*
    Class - It's the group of persons
    Object - It's a person
*/

const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

// Register a listener
logger.on("MessageLogged", (e) => { // e => event
    console.log("Listener called", e);
});

logger.log("message");