const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    const character = chunk.toString().trim();

    if (!character) {
      const error = new Error("Invalid data");
      return callback(error);
    }

    this.queue.push(`Created character: "${character}"`);
    callback(null);
  }

  _read(size) {
    while (this.queue.length > 0) {
      const character = this.queue.shift();
      // Push the character description to the stream
      this.push(character);
    }

    // Signal the end of the stream when no more characters are in the queue
    if (this.queue.length === 0) {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;
