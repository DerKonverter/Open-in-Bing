chrome.browserAction.onClicked.addListener(function(tab) {
    var query = { active: true, currentWindow: true };
    chrome.tabs.query(query, function(tabs) {
      var currentTab = tabs[0];
      var url = "https://www.bing.com/search?q=" + encodeURIComponent(currentTab.title);
      chrome.tabs.create({ url: url });
    });
  });  