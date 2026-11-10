// Week 4 Day 4 — Extra 2 (only if you finish early): a grid made by JavaScript
// Nothing new today. This is Monday's forEach + Tuesday's createElement, together.

// First: replace this list with YOUR truck's six things.
const things = ["Tacos", "Burritos", "Nachos", "Churros", "Drinks", "Specials"];

const grid = document.getElementById("js-grid");


// EXAMPLE: one grid item. A grid item is TWO divs: the column, and the box inside it.
const col = document.createElement("div");
col.className = "col";

const box = document.createElement("div");
box.className = "p-4 bg-warning-subtle border";
box.textContent = "Made by JavaScript";

col.appendChild(box);    // the box goes inside the column...
grid.appendChild(col);   // ...and the column goes inside the grid


// YOUR TURN: use forEach to make one grid item for EVERY thing in the list.
// Hint: put the example's 7 lines inside
//   things.forEach(function (thing) { ... });
// and change the text to thing. Then delete the example above.
// Check: resize the window. Your JavaScript grid goes 1 → 2 → 3 columns too.
