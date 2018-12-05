var contextMenuItem = {
    "id" : "spendMoney",
    "title" : "SpendMoney",
    "contexts" : ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "spendMoney" && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total','limit'],function(budget){
                var newTotal = 0;
                if(budget.total){
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total':newTotal},function(){
                  if(newTotal >= budget.limit){
                    var notifyoptions = {
                        type : 'basic',
                        iconUrl : 'icon16.png',
                        title : 'Total reset!',
                        message : 'Total has been reset to 0!',
                        priority:1
                    }
                    chrome.notifications.create('limitNotif',notifyoptions,function(){
                        console.log('notification created');
                    });
                  }
                })
            })
        }
    }
})

// BADGES
chrome.storage.onChanged.addListener(function(changes,storageName){
    chrome.browserAction.setBadgeText({'text':changes.total.newValue.toString()});
})