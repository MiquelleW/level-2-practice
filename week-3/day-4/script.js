// Day 4 — Loops: practice the for loop
// A loop runs the same code once for every item in a list.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change ONE thing.

// First: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
  { name: "Churro", price: 3 },
];


// ---------- Step 1: Log every price ----------
// EXAMPLE: log every item's NAME.
// i is a counter: 0, then 1, then 2... menu[i] is the item at that spot.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

// YOUR TURN: log every item's PRICE.
// Change one thing: .name → .price


// ---------- Step 2: A sentence for each item ----------
// EXAMPLE: logs "Taco is on the menu", "Burrito is on the menu"...
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name + " is on the menu");
}

// YOUR TURN: log "Taco costs $4.5", "Burrito costs $9"...
// Change one thing: " is on the menu" → " costs $" + menu[i].price


// ---------- Step 3: Put the menu on the page ----------
// EXAMPLE: puts every NAME on the page, one per line. (Same as Menu Card.)
const menuText = document.querySelector("#menu-text");
menuText.textContent = "";
for (let i = 0; i < menu.length; i++) {
  menuText.textContent = menuText.textContent + menu[i].name + "\n";
}

// YOUR TURN: don't copy this one. Change the example above,
// so each line shows the name AND the price, like "Taco: $4.5".
// Change one thing: menu[i].name → menu[i].name + ": $" + menu[i].price


// ---------- Step 4: Add up a total ----------
// EXAMPLE: COUNT the items. count starts at 0 BEFORE the loop,
// and goes up by 1 INSIDE the loop.
let count = 0;
for (let i = 0; i < menu.length; i++) {
  count = count + 1;
}
console.log("Items:", count);

// YOUR TURN: add up every PRICE into a total. Log it.
// Change: count → total, and + 1 → + menu[i].price


// ---------- Extra (if you finish early): only SOME items ----------
// EXAMPLE: logs only the items that cost LESS than $5.
// The if is a gate: the loop still visits every item,
// but only the cheap ones get through to console.log.
for (let i = 0; i < menu.length; i++) {
  if (menu[i].price < 5) {
    console.log("Cheap:", menu[i].name);
  }
}

// YOUR TURN: log only the items that cost MORE than $5, like "Fancy: Burrito".
// Change: < → >   and   "Cheap:" → "Fancy:"
