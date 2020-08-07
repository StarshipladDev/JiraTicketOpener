// JavaScript source code
chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'jira' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});