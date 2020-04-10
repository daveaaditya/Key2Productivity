chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    if (command === "duplicate_tab") {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
            chrome.tabs.duplicate(tabs[0].id);
        });
    }
    else if (command === "new_right_tab") {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
            chrome.tabs.create({index: tabs[0].index + 1});
        });
    }
    // else if (command === "new_left_tab") {
    //     chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {        
    //         chrome.tabs.create({index: tabs[0].index});
    //     });
    // }
});