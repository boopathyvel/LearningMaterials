const Web3 = require('web3');
const fs = require('fs');
const solc = require('solc');
const express = require('express');
const app = express();
let web3;


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/99ba9cf51093478e8941ff667779149c"));
}

var account = web3.eth.accounts.create('qwerty');
/*var account = web3.eth.personal.newAccount('qwerty', function(res){
    console.log('account details',res);
    console.log('account created....');
})*/

console.log('account ..'+account.address);

const source = fs.readFileSync('./coin.sol', 'utf8');
const compile = solc.compile(source, 1);
const contractCompile = Object.values(compile.contracts)[0];
const deployAddr = account.address;
const contractByteCode = '0x' + contractCompile.bytecode;
const contractAbi = JSON.parse(contractCompile.interface);
const gasEstimate = web3.eth.estimateGas({data: contractByteCode});
const gasPrice = '20000000000';
const myContract = new web3.eth.Contract(contractAbi, {
    from: deployAddr,
    gas: '15000000',
    gasPrice: gasPrice,
});
const initialSupply = 10000000000;
const tokenName = 'LLT';
const tokenSymbol = 'LLT';


web3.eth.personal.unlockAccount(deployAddr, '').then(function(result,e){
    console.log("Account "+deployAddr+" unlocked successfully");
    myContract.deploy({
        data: contractByteCode,
        arguments: [initialSupply, tokenName, tokenSymbol]
    }).send({
        from: deployAddr,
        gas: '15000000',
        gasPrice: gasPrice
    }, function (error) {
        console.log(error);
    }).on('transactionHash', function (transactionHash) {console.log(transactionHash)})
    .on('receipt', function (receipt) {
        console.log(receipt.contractAddress) // contains the new contract address
    }).on('confirmation', function (confirmationNumber, receipt) {
    }).then(function (newContractInstance) {
        console.log(newContractInstance.options.address) // instance with the new contract address
    }).catch(err => {
        console.log("Error: failed to deploy, detail:", err)
    });
}).catch(function(error){
    console.log("Incorrect transaction password for account: "+deployAddr);
    console.log("Incorrect transaction password.");
});
console.log('contract deployed..........');