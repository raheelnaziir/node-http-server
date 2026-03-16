const events = require("events");
const { EventEmitter } = require("stream");

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on("waterfall", () => {
    console.log("turn off the motor!");
    setTimeout(() => {
        console.log("warninm!,,,turn off the motor");
    }, 2000);
})

console.log("script is running");
myEmitter.emit("waterfall");