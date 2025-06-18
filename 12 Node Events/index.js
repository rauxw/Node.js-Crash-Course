import Eventemitter from "events";

//Creating Instance
const myEmitter = new Eventemitter();

// 1 on: listen/register for an event
// 2 once: listen/register for an event (only one event)
// 3 emit: emit/call an event

myEmitter.once("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

myEmitter.emit("response", "Homp", 19);
myEmitter.emit("response", "Olps", 20);
myEmitter.emit("response", "Alex", 21);
