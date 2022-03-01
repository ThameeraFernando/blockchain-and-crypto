const Block = require("./Block");
const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

describe("Block", () => {
  const timestamp = "2-11-21";
  const hash = "hash";
  const lasthash = "l-hash";
  const data = ["A", "B"];
  const block = new Block({ timestamp, hash, lasthash, data });
  //Check the Block class constructor
  it("has a timestamp, hash, lasthash,data", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.hash).toEqual(hash);
    expect(block.lasthash).toEqual(lasthash);
    expect(block.data).toEqual(data);
  });
  //check the genesis method
  describe("genesis()", () => {
    const genesisBlock = Block.genesis();

    it("returns a Block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it("returns the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
  //test mineBlock() method
  describe("mineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    const minedBlock = Block.mineBlock({ lastBlock, data });
    it("returns a block instance", () => {
      expect(minedBlock instanceof Block).toBe(true);
    });
    it("sets `lasthash` to be the `hash`", () => {
      expect(minedBlock.lasthash).toEqual(lastBlock.hash);
    });
    it("sets the `data`", () => {
      expect(minedBlock.data).toEqual(data);
    });
    it("sets a `timestamp`", () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });
    it("create a sha256 hash based on the proper inputs.", () => {
      expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp,lastBlock.hash,data))
    });
  });
});
