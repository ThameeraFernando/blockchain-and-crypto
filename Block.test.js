const Block = require("./Block");
const { GENESIS_DATA } = require("./config");

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
});
