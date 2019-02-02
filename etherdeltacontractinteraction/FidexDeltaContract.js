function FidexDeltaContract() {
    this.web3 = new Web3(web3.currentProvider);
    this.fidexContract = new FidexContract(this.web3);
    this.contract = this.fidexContract.getContract();
    this.abiObjects = {};
    this.fidexContract.loadAbis(this.abiObjects,[],0);
}
  
FidexDeltaContract.prototype.deposit = function(ether) {
    ether = '1';
    this.contract.methods.deposit()
        .send({'from':this.fidexContract.getCurrentAddress(), value: this.web3.utils.toWei(ether)})
        .then((success,failure) =>{
            console.log('err...'+failure);
            console.log('symbol...'+success);
    });
}   

FidexDeltaContract.prototype.balanceOf = function(tokenAddress, user) {
    tokenAddress = '0x0000000000000000000000000000000000000000';
    tokenAddress = '0xde339cab2d5e2024e4cfafa138cf3915bfd439d5';
    user = this.fidexContract.getCurrentAddress();
    this.contract.methods.balanceOf(tokenAddress,user).call((success,failure)=>{
        console.log('err...'+failure);
        console.log('balance...'+success);
    });
}

FidexDeltaContract.prototype.approve = function(tokenAddress, user) {
    tokenAddress = '0xde339cab2d5e2024e4cfafa138cf3915bfd439d5';
    let contractAbi = this.abiObjects[tokenAddress];
    let contractInstance = new this.web3.eth.Contract(contractAbi,tokenAddress);
    contractInstance.methods.approve(this.fidexContract.getContractAddress(),5000000000000)
        .send({'from':this.fidexContract.getCurrentAddress()})
        .then((success,failure) =>{
            console.log('err...'+failure);
            console.log('symbol...'+success);
    });
}

FidexDeltaContract.prototype.withdraw = function(ether) {
    this.contract.methods.withdraw(this.web3.utils.toWei('1', 'ether'))
        .send({'from':this.fidexContract.getCurrentAddress()})
        .on('error',function(err){
            console.log(err)
        }).then((success,failure) =>{
            console.log('err...'+failure);
            console.log('symbol...'+success);
    });
}

FidexDeltaContract.prototype.transfer = function() {
    
}

FidexDeltaContract.prototype.depositToken = function() {
    this.contract.methods.depositToken('0xde339cab2d5e2024e4cfafa138cf3915bfd439d5',1000000000000)
        .send({'from':this.fidexContract.getCurrentAddress()})
        .then((success,failure) =>{
            console.log('err...'+failure);
            console.log('symbol...'+success);
    });
}

FidexDeltaContract.prototype.withdrawToken = function() {
    this.contract.methods.withdrawToken('0xde339cab2d5e2024e4cfafa138cf3915bfd439d5',100000000000)
        .send({'from':this.fidexContract.getCurrentAddress()})
        .then((success,failure) =>{
        console.log('err...'+failure);
        console.log('symbol...'+success);
    });
}

FidexDeltaContract.prototype.transferToken = function() {
    console.log('transferToken');
}


