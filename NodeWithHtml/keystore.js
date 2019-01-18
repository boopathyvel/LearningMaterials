var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');
var fs = require('fs');

const privateKeyString = '0x92319716EE6A81FDBEE2868FB9B9C9CB095C317FEE506C25D07DF04E67DB994E';

const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet.fromPrivateKey(privateKeyBuffer);
const publicKey = wallet.getPublicKeyString();
console.log(publicKey);
const address = wallet.getAddressString();
console.log(address);
const keystoreFilename = wallet.getV3Filename();
console.log(keystoreFilename);
const keystore = wallet.toV3("PASSWORD");
console.log(keystore);
fs.writeFileSync(__dirname+'/keystorefile.txt',JSON.stringify(keystore));
