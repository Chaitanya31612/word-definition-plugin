console.log("hellos from content.js");

window.addEventListener("mouseup", wordSelected);

function wordSelected() {
  let selectedText = window.getSelection().toString().trim();
  console.log(selectedText);

  if (selectedText) {
    const message = {
      text: selectedText,
    };
    chrome.runtime.sendMessage(message);
  }
}
