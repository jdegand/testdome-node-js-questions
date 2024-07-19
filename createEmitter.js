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
