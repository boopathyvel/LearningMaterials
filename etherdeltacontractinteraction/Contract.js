function FidexContract(web3) {
    this.web3 = web3;
    console.log('FidexContract details');
}

FidexContract.prototype.getContract = function (){
    return new this.web3.eth.Contract(this.getContractABI(),'0xa50a8c0f68de5768c5cbf33fa66c9caef9bef7cd');
}

FidexContract.prototype.getContractAddress = function (){
    return '0xa50a8c0f68de5768c5cbf33fa66c9caef9bef7cd';
}

FidexContract.prototype.getCurrentAddress = function(){
    return this.web3.eth.accounts.currentProvider.selectedAddress;
}

FidexContract.prototype.getByteCode = function(){
    return '';
}

FidexContract.prototype.loadAbis = function(abiObjects,tokenArray,index){
    tokenArray = ['0xde339cab2d5e2024e4cfafa138cf3915bfd439d5'];
    this.hitAbi(tokenArray[index]).then(function(result) {
            abiObjects[tokenArray[index]] = JSON.parse(JSON.parse(result).result);
            console.log("Promise worked");
            if(tokenArray.length-1 >= index+1){
                this.loadAbis(abiObjects,tokenArray,index++);
            }
    }, function(err) {
            console.log("Something broke");
    }.bind(this));
}

FidexContract.prototype.hitAbi = function(tokenAddress){
    var promise = new Promise(function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                var response = xhttp.responseText;
                resolve(response);
                console.log("ok"+response);
            }
        };
        xhttp.open("GET", "https://api-ropsten.etherscan.io/api?module=contract&action=getabi&address="+tokenAddress, true);
        xhttp.send();
    });
    return promise;
}

FidexContract.prototype.getContractABI = function(){
    return [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenAddress",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "trade",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                }
            ],
            "name": "order",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orderFills",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "cancelOrder",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "depositToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "amountFilled",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "tokens",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeMake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeMake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeMake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeRebate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeAccount",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "name": "sender",
                    "type": "address"
                }
            ],
            "name": "testTrade",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeAccount_",
                    "type": "address"
                }
            ],
            "name": "changeFeeAccount",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeRebate",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "feeTake_",
                    "type": "uint256"
                }
            ],
            "name": "changeFeeTake",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                }
            ],
            "name": "changeAdmin",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "orders",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "feeTake",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                }
            ],
            "name": "changeAccountLevelsAddr",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "accountLevelsAddr",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "token",
                    "type": "address"
                },
                {
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "name": "user",
                    "type": "address"
                },
                {
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "availableVolume",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "admin_",
                    "type": "address"
                },
                {
                    "name": "feeAccount_",
                    "type": "address"
                },
                {
                    "name": "accountLevelsAddr_",
                    "type": "address"
                },
                {
                    "name": "feeMake_",
                    "type": "uint256"
                },
                {
                    "name": "feeTake_",
                    "type": "uint256"
                },
                {
                    "name": "feeRebate_",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "Order",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "expires",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "nonce",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "indexed": false,
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "Cancel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "tokenGet",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGet",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "tokenGive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amountGive",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "get",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "give",
                    "type": "address"
                }
            ],
            "name": "Trade",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "token",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        }
    ];
}