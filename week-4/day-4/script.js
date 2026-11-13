// Week 4 Day 4 — Extra 2 (only if you finish early): a grid made by JavaScript
// Nothing new today. This is Monday's forEach + Tuesday's createElement, together.

// First: replace this list with YOUR truck's six things.
const things = [
  "Pizza Dip & Garlic Knots",
  "Philly Cheesesteak Eggrolls",
  "Loaded Potato Cheese Balls",
  "Cheeseburger Loaded Fries",
  "Viral Snack Combos",
  "Shareable Bites",
];

const grid = document.getElementById("js-grid");

// YOUR TURN: use forEach to make one grid item for EVERY thing in the list.
// Hint: put the example's 7 lines inside
//   things.forEach(function (thing) { ... });
// and change the text to thing. Then delete the example above.
// Check: resize the window. Your JavaScript grid goes 1 → 2 → 3 columns too.
things.forEach(function (thing) {
  const col = document.createElement("div");
  col.className = "col";

  const box = document.createElement("div");
  box.className = "card p-4 bg-warning-subtle";
  box.textContent = thing;

  col.appendChild(box);
  grid.appendChild(col);
});
