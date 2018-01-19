console.log('popupjs called');
var a = document.querySelector('#hi');
a.textContent = "haha";

chrome.bookmarks.getTree(function (result) {
  console.log(result)
});

var b = "popup";