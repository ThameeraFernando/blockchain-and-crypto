const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

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
  //mine block method
  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lasthash = lastBlock.hash;
    return new this({
      timestamp,
      lasthash,
      data,
      hash: cryptoHash(timestamp, lasthash, data),
    });
  }
}
module.exports = Block;
