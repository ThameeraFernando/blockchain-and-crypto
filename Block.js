const { GENESIS_DATA } = require("./config");

class Block {
  //constructor
  constructor({ timestamp, lasthash, hash, data }) {
    this.timestamp = timestamp;
    this.lasthash = lasthash;
    this.hash = hash;
    this.data = data;
  }
  //get genesis block method
  static genesis() {
    return new Block(GENESIS_DATA);
  }
}
module.exports = Block;
