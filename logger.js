
const EventEmitter = require("events");

var url = "https://google.pt";

class Logger extends EventEmitter {

    log(message) {
        // Send a HTTP request
        console.log(message);
    
        // Raise an event
        this.emit("MessageLogged", { id: 1, url: "https://" });
    }
}

module.exports = Logger;
