// Tutorial 2
// Command Line: node tutorial2.js --deploy example.sol

// The require packages
web3.currentProvider.publicConfigStore.on('update', function(e){
    console.log('account changed',e);
});
console.log('End here.');