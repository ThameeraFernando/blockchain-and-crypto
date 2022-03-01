const Block = require("./Block");

describe("Block", () => {
  const timestamp = "2-11-21";
  const hash = "hash";
  const lasthash = "l-hash";
  const data = ["A", "B"];
  const block = new Block({ timestamp, hash, lasthash, data });

  it("has a timestamp, hash, lasthash,data", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.hash).toEqual(hash);
    expect(block.lasthash).toEqual(lasthash);
    expect(block.data).toEqual(data);
  });
});

