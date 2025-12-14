chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Jotoba Translate",
    id: "jotoba-ext",
    contexts: ["selection"],
  });
});

function onClick(info, tab) {
  if (info?.selectionText) {
    chrome.windows.create({
      width: 520,
      height: 700,
      type: "popup",
      url: "https://jotoba.de/search/0/" + info.selectionText,
    });
  }
}
chrome.contextMenus.onClicked.addListener(onClick);
