// Week 4 Day 2 — createElement: JavaScript makes new elements
// Until now, JavaScript only changed elements that were already in the HTML.
// Today it MAKES new ones: a Bootstrap card for every item on your menu.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

// First: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
];

// getElementById finds ONE element by its id. Same job as querySelector("#card-area"),
// but it only works with ids, so there's no # in the quotes.
const area = document.getElementById("card-area");


// ---------- Step 1: Make ONE card ----------
// EXAMPLE: 4 moves. Make it, give it classes, give it text, put it on the page.
const card = document.createElement("div");   // 1. make a new <div> (not on the page yet!)
card.className = "card p-3";                   // 2. give it Bootstrap classes
card.textContent = "Today's special";          // 3. give it text
area.appendChild(card);                        // 4. put it inside #card-area. Now you can see it.

// YOUR TURN: make a second card that says your truck's name.
// Change: card → card2 (4 places), and the text.


// ---------- Step 2: A card for EVERY item ----------
// EXAMPLE: the same 4 moves, inside forEach. One card per menu item.
menu.forEach(function (item) {
  const itemCard = document.createElement("div");
  itemCard.className = "card p-3";
  itemCard.textContent = item.name;
  area.appendChild(itemCard);
});

// YOUR TURN: don't copy this one. Change the example above,
// so each card shows the name AND the price, like "Taco: $4.5".
// Change: item.name → item.name + ": $" + item.price


// ---------- Step 3: Dress up the cards ----------
// YOUR TURN: in the Step 2 example, add more Bootstrap classes to the className, for example:
//   "card p-3 text-center shadow-sm"     or     "card p-3 bg-light border-primary"
// Save after each change and watch EVERY card change at once.


// ---------- Extra (if you finish early): cheap items stand out ----------
// Inside forEach, give items under $5 a different className than the others.
// You need an if / else:
//   if (item.price < 5) { ...one className... } else { ...another className... }
// Try "card p-3 bg-success-subtle" for the cheap ones.
