window.fidex = new FidexDeltaContract();  
document.addEventListener('click', function (event) {
            if (event.target.id === 'deposit'){
                window.fidex.deposit();
            }else if (event.target.id === 'withdraw'){
                window.fidex.withdraw();
            }else if (event.target.id === 'transfer'){
                window.fidex.transfer();
            }else if (event.target.id === 'depositToken'){
                window.fidex.depositToken();
            }else if (event.target.id === 'withdrawToken'){
                window.fidex.withdrawToken();
            }else if (event.target.id === 'transferToken'){
                window.fidex.transferToken();
            }else if (event.target.id === 'balance'){
                window.fidex.balanceOf();
            }else if (event.target.id === 'approve'){
                window.fidex.approve();
            }
}, false);

