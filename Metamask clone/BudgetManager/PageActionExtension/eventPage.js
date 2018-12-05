//retreives all the tabs


chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if(request.todo === "showPageAction"){
        chrome.tabs.query({active:true,currentWindow:true},
            function(tab){
                chrome.pageAction.show(tab[0].id);
        });
    }  
})