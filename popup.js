let searchTextP = document.getElementById("searchText");
searchTextP.innerText = "hello";

chrome.storage.sync.get("searchText", async ({ searchText }) => {
  console.log("searchText:", searchText);
  searchTextP.innerText = searchText;

  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`;

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);

  let definition = data[0].meanings[0].definitions[0].definition;
  console.log(definition);

  searchTextP.innerText = definition;
  searchTextP.style.fontSize = "1.5rem";
});
