const EventEmitter = require("events");
const event = new EventEmitter();

//Event jo bnaya ha wo karay ga kiya?
event.on('sayMyName', () => {
    console.log("Your Name is Arbab");
});

//multiple call backs
// event.on('sayMyName', () => {
//     console.log("Your Name is Arain");
// }); event.on('sayMyName', () => {
//     console.log("Your Name is Anjum");
// })

//Event create kar ray han hum apni marzi k name ka
// event.emit("sayMyName");

event.on("checkpage", (sc, msg) => {
    console.log(`status code in ${sc} and the page is ${msg}`);
});
event.emit("checkpage", 200, "OK")