// JavaScript source code
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlPrefix: 'https://jira' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});