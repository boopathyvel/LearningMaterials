const Web3 = require('web3');

// connect to any peer; using infura here
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/99ba9cf51093478e8941ff667779149c"));

// contents of keystore file, can do a fs read
const keystore = "Contents of keystore file";
const decryptedAccount = web3.eth.accounts.decrypt(keystore, 'PASSWORD');

const rawTransaction = {
  "from": "Keystore account id",
  "to": "Account you want to transfer to",
  "value": web3.utils.toHex(web3.utils.toWei("0.001", "ether")),
  "gas": 2000,
  "chainId": 3
};
decryptedAccount.signTransaction(rawTransaction)
  .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
  .then(receipt => console.log("Transaction receipt: ", receipt))
  .catch(err => console.error(err));
// Or sign using private key from decrypted keystore file
/*
web3.eth.accounts.signTransaction(rawTransaction, decryptedAccount.privateKey)
  .then(console.log);
*/