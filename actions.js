// JavaScript source code
function openJIRA() {
    var elements = document.getElementsByClassName("issue-link");
    var clickableElements = [];
    for (var i = 0; i < elements.length; i++) {
        if (!clickableElements.includes(elements[i].href)) {
            clickableElements = clickableElements.concat(elements[i].href);
        }
        //window.open(i.href);
    }
    alert(clickableElements.length);
    for (var i = 0; i < clickableElements.length; i++) {
        console.log(elements[i].href);
        window.open(clickableElements[i], "_blank")
    }
}
let ticketButton = document.getElementById('ticketButton');
ticketButton.onclick = function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var elements = document.getElementsByClassName("issue-link");var clickableElements = [];for(var i = 0; i<elements.length; i++) {if (!clickableElements.includes(elements[i].href)) {clickableElements = clickableElements.concat(elements[i].href);}}alert(clickableElements.length); for (var i = 0; i < clickableElements.length; i++) {console.log(elements[i].href);window.open(clickableElements[i], "_blank")}'});
    });
};