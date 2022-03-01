//get the crypto module
const crypto = require("crypto");

//crypto hash method
//get inputs and stores in a array
const cryptoHash = (...inputs) => {
  //cretate hash object
  const hash = crypto.createHash("sha256");
  //sort the input array and join in to a string
  hash.update(inputs.sort().join(" "));
  //return the hash value
  return hash.digest("hex");
};

module.exports = cryptoHash;
