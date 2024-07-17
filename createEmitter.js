const events = require("events");

// Function to create the emitter and set up event handlers
function createEmitter(onOpen, onClose) {
    const emitter = new events.EventEmitter();

    // Register the event handlers for 'open' and 'close' events using 'once'
    emitter.once('open', onOpen);
    emitter.once('close', onClose);

    return emitter;
}

// Function to emit the 'open' event
function opened(emitter) {
    emitter.emit('open');
}

// Function to emit the 'close' event
function closed(emitter) {
    emitter.emit('close');
}

// Example usage
let emitter = createEmitter(
  () => console.log("Opened!"),
  () => console.log("Closed!")
);

// Emit the 'open' and 'close' events
opened(emitter);  // Output: "Opened!"
opened(emitter);  // No output, callback already invoked
closed(emitter);  // Output: "Closed!"
closed(emitter);  // No output, callback already invoked

// Export the functions for external use
module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;
