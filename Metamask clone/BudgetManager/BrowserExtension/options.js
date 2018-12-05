$(function(){
    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    })

    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit':parseInt(limit)},function(){
                close();
            })
        }
    })

    $('#resetTotal').click(function(){
            chrome.storage.sync.set({'total':0},function(){
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
            })  
    })
})