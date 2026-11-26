// Week 6 Day 1 — Character Search: every request has 4 outcomes
// The characters come from the Rick and Morty API (free, no key): https://rickandmortyapi.com/documentation
// This page WORKS when everything goes right. Your job: make it work when things go wrong.
//
//   1. LOADING:   still waiting                    → "Searching..."
//   2. ERROR:     it broke (no internet, 500)      → a short, friendly message
//   3. EMPTY:     it worked, but found nobody      → "No characters match"
//   4. SUCCESS:   results!                         → the list
//
// Open index.html with Live Server and try a search first.

const searchBox = document.getElementById("search-box");
const searchButton = document.getElementById("search-btn");
const statusText = document.getElementById("status");
const results = document.getElementById("results");

async function searchCharacters() {
  try {
    if (searchBox.value.trim() === "") {
      statusText.textContent = "Type a name first.";
      statusText.className = "text-secondary";
      results.textContent = "";
      return;
    }
    // A template literal: backticks ` ` instead of quotes, and ${...} drops a value into the text.
    const url = `https://rickandmortyapi.com/api/character/?name=${searchBox.value}`;

    // ---------- Step 1 goes here: clear old results + LOADING ----------
    results.textContent = "";
    statusText.textContent = "Searching...";

    const response = await fetch(url);

    // ---------- Step 3 goes here: EMPTY (it must come BEFORE Step 2's check) ----------
    if (response.status === 404) {
      statusText.textContent = `No characters match "${searchBox.value}". Try "rick".`;
      statusText.className = "text-danger";
      return;
    }

    // ---------- Step 2 goes here: ERROR check ----------
    if (!response.ok) {
      statusText.textContent = `Something went wrong (status ${response.status}).`;
      statusText.className = "text-danger";
      return;
    }

    const data = await response.json();
    console.log(data);

    // Step 1: #2 - Take the Searching... message away so it isn't there after you get your results
    statusText.textContent = "";

    statusText.textContent = `Found ${data.info.count} characters`;
    statusText.className = "text-success";

    // SUCCESS: one list item per character
    data.results.forEach(function (character) {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${character.name} (${character.species}, ${character.status})`;
      results.appendChild(item);
    });
  } catch (error) {
    console.log(error);
    statusText.textContent =
      "Can't reach the Rick and Morty server. Check your internet and try again.";

    statusText.className = "text-danger";

    const retryButton = document.createElement("button");
    retryButton.textContent = "Try again";
    retryButton.className = "btn btn-outline-dark btn-sm ms-2";

    retryButton.addEventListener("click", searchCharacters);

    statusText.appendChild(retryButton);
  }
}

searchButton.addEventListener("click", searchCharacters);

searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchCharacters();
  }
});

// ---------- Step 1: clear old results, and show LOADING ----------
// Search "rick", then "summer". The Ricks are still there! And there's no sign
// anything is happening while it loads.
// Hint: at "Step 1 goes here", empty  results  and put "Searching..." in  statusText.
//       After the data arrives, empty  statusText  again.
// Check: DevTools → Network → "Slow 4G". You see "Searching...". Old results disappear.

// ---------- Step 2: ERROR (like Week 5 Thursday) ----------
// DevTools → Network → "Offline". Search. Red error, and "Searching..." stays forever.
// Hint: two kinds of error, two fixes.
//   - The server answers with a bad status → check  response.ok , show a message, and  return .
//   - The server never answers (no internet) → wrap the whole function body in  try { } catch (error) { }
//     and show a friendly message in the catch.
// Check: Offline shows your message. Back to "No throttling" and it works again.

// ---------- Step 3: EMPTY (nothing found) ----------
// Search "zzzz". The page says "Something went wrong (status 404)". But nothing went wrong!
// The search worked. There's just nobody called zzzz. To see the server's answer: DevTools → Network →
// click the  ?name=zzzz  request → Response: {"error":"There is nothing here"}.
// Hint: this API answers 404 when nothing matches. At "Step 3 goes here", check  response.status
//       for 404, show a friendly "No characters match" message, and  return .
//       Why above Step 2? A 404 is also "not ok", so Step 2's check would catch it first.
// Check: "zzzz" shows your message. "rick" still shows results.
// Good to know: other APIs say "nothing found" with status 200 and an EMPTY list, like  results: [].
// Then you check  data.results.length === 0  instead. Same idea, different signal. Week 7 uses that one.

// ---------- Extra (if you finish early) ----------
// 1. Show a count. Look at  data  in the console: the total is in  data.info .
//    Put "Found ___ characters" in  statusText , right above forEach.
//    (Check: rick → 107. The page shows the first 20. Paging comes Wednesday!)
// 2. A Retry button: in the catch, make a <button> with createElement, text "Try again",
//    className "btn btn-outline-dark btn-sm ms-2". Add a click listener that runs searchCharacters,
//    and append it to statusText.
// 3. Search when the user presses Enter, too. (Hint: listen for "keydown" on searchBox,
//    and check if event.key === "Enter".)
