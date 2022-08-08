console.log("hello from background script web search text");

chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {
  console.log(request.text);
  chrome.storage.sync.set({ searchText: request.text });
  console.log("searchText:", request.text);
}
