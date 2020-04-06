chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.duplicate(tabs[0].id);
    });
});