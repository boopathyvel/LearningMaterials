
const argv = require('minimist')(process.argv.slice(2));
const EthereumTx = require('ethereumjs-tx');
const keythereum = require("keythereum");
const Web3 = require('web3');
const fs = require('fs');


// connect to block chain


var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/99ba9cf51093478e8941ff667779149c"));
console.log('web3 connected');
var account = web3.eth.accounts.create('qwerty');

var privateKey = account.privateKey;

console.log('address',account.address);
console.log('privateKey: ', privateKey.toString('hex'));


web3.eth.getTransactionCount(account.address).then(nonce => {
  console.log('nonce: ', nonce);

  let txParams = {
    nonce: '0x0'+nonce,
    gasPrice: '0x00',
    gasLimit: '0x47b760',
    to: '0xca843569e3427144cead5e4d5999a3d0ccf92b8e', // node 2 account
    value: '0x01',
    chainId: 10,
  };

  console.log('tx payload: ', txParams);

  const tx = new EthereumTx(txParams);

  tx.sign(new Buffer(privateKey, 'hex'));
  const serializedTx = tx.serialize();
  var rawTx = '0x' + tx.serialize().toString('hex');

  console.log('raw transaction: ', rawTx);

  web3.eth.sendSignedTransaction(rawTx).on('receipt', console.log('transaction success:'+receipt));
}).catch(function(error){
  console.log(error);
});