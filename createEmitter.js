const events = require("events");

function createEmitter(onOpen, onClose) {
  const e = new events();
  e.once('open', onOpen); 
  e.once('close', onClose);
  return e;
}

function opened(emitter) {
 emitter.emit('open'); 
}
function closed(emitter) {
 emitter.emit('close');
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;

/*
75%

const events = require("events");
const e = new events();

function createEmitter(onOpen, onClose) {
    
  e.once('open', onOpen); 
  e.once('close', onClose);
  
}

function opened(emitter) {
 e.emit('open', emitter); 
}
function closed(emitter) {
 e.emit('close', emitter);
}

let emitter = createEmitter(
  () => console.log("Opened!"), () => console.log("Closed!")
);
opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;

*/