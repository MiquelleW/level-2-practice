// Week 5 Day 4 — Recipe Finder: show a few fields, and handle what goes wrong
// The recipes come from DummyJSON, a free practice API: https://dummyjson.com/docs/recipes
// Open index.html with Live Server, type a number, click the button.

const input = document.getElementById("recipe-id");
const button = document.getElementById("load-btn");
const statusText = document.getElementById("status");
const recipeArea = document.getElementById("recipe");

async function loadRecipe() {
  try {
    const url = "https://dummyjson.com/recipes/" + input.value;

    recipeArea.textContent = ""; // clear the old recipe first

    // ---------- Step 2 goes here (loading message) ----------

    statusText.textContent = "Loading...";

    const response = await fetch(url);

    // ---------- Step 3 goes here (no recipe with that number) ----------

    if (!response.ok) {
      statusText.textContent = "No recipe with that number. Try 1 to 50.";
      return;
    }

    const recipe = await response.json();
    statusText.textContent = "";
    console.log(recipe); // look at ALL the fields in the console, then pick a few

    // ---------- Step 1: show a few fields ----------
    // EXAMPLE: a card with the recipe's name. Same 4 moves as Week 4.
    const card = document.createElement("div");
    card.className = "card p-3";

    const title = document.createElement("h2");
    title.className = "h4";
    title.textContent = recipe.name;
    card.appendChild(title);

    const cuisine = document.createElement("p");
    cuisine.textContent = "Cuisine: " + recipe.cuisine;
    card.appendChild(cuisine);

    const time = document.createElement("p");
    time.textContent = "Ready in " + recipe.prepTimeMinutes + " minutes";
    card.appendChild(time);

    recipeArea.appendChild(card);
  } catch (error) {
    statusText.textContent =
      "Can't reach the recipe server. Check your internet.";
  }

  // YOUR TURN: add 2 more fields to the card, under the title. For example:
  //   a <p> with the cuisine:           "Cuisine: Italian"
  //   a <p> with the prep time:         "Ready in 20 minutes"   (recipe.prepTimeMinutes)
  // Each one: createElement, textContent, card.appendChild.
}

button.addEventListener("click", loadRecipe);

// ---------- Step 2: a loading message ----------
// The request takes a moment. Tell the user something is happening.
// At "Step 2 goes here", add:
//   statusText.textContent = "Loading...";
// Then, right after the line  const recipe = await response.json();  add:
//   statusText.textContent = "";
// Check: in DevTools → Network, set "No throttling" to "Slow 4G". Click. You see "Loading...".

// ---------- Step 3: no recipe with that number ----------
// Try number 9999. The card says "undefined". Look at the console: the server answered
// with status 404 and a message, not a recipe.
// response.ok is true for 200-299, false for errors like 404.
// At "Step 3 goes here", add:
//   if (!response.ok) {
//     statusText.textContent = "No recipe with that number. Try 1 to 50.";
//     return;   // stop here, don't make a card
//   }
// Check: 9999 shows your message. 1 still shows a recipe.

// ---------- Step 4: no internet ----------
// In DevTools → Network, set "No throttling" to "Offline". Click. Red error in the console,
// and the page just says "Loading..." forever.
// try = "try these lines". catch = "if anything in them breaks, run this instead".
// Wrap EVERYTHING inside loadRecipe (from const url ... to recipeArea.appendChild(card);) like this:
//   try {
//     ...all the lines...
//   } catch (error) {
//     statusText.textContent = "Can't reach the recipe server. Check your internet.";
//   }
// Check: Offline shows your message. Set it back to "No throttling" and it works again.

// ---------- Extra (if you finish early) ----------
// 1. Show the ingredients as a list: createElement("ul"), then recipe.ingredients.forEach(...)
//    makes one <li> per ingredient.
// 2. Show the picture: createElement("img"), set .src = recipe.image and .alt = recipe.name,
//    and className = "img-fluid rounded mb-2".
