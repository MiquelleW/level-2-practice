// Week 6 Day 4 — Character Stats: turn 20 characters into a few small numbers
// The characters come from the Rick and Morty API (free, no key): https://rickandmortyapi.com/documentation
//
//   Step 1: fetch  → GET the characters yourself, using the docs
//   Step 2: filter → KEEP some items       20 characters → the 6 dead ones
//   Step 3: map    → CHANGE every item     20 characters → 20 episode counts
//   Step 4: reduce → SQUISH into one value 20 characters → 1 average
//
// You only write code in TWO places:
//   Step 1        → inside loadCharacters (just below)
//   Steps 2, 3, 4 → inside showSummaries (right under Step 1)
// The ready-made functions are at the BOTTOM of the file. No need to read them.
//
// The cards are ready-made: click a card to flip it and see the details.
// Open index.html with Live Server and open the console.

const statusText = document.getElementById("status");
const summary = document.getElementById("summary");
const characterList = document.getElementById("character-list");


// ---------- Step 1: fetch the characters (no example today: you've got this!) ----------
// Open the docs: https://rickandmortyapi.com/documentation
//   a. Under "Character", find "Get all characters". Put its URL in  url  below.
//   b. Look at the example answer in the docs. The answer is an OBJECT with two keys.
//      Which key holds the array of characters?
//   c. Inside loadCharacters, write the same request as Monday:
//        LOADING:  statusText says "Loading characters..."
//        fetch the url. ERROR check: if (!response.ok) ... return;
//        .json() it, console.log it, and clear statusText.
//        SUCCESS:  showSummaries(the array);  then  showCards(the array);
//        ERROR:    wrap it all in try/catch. In the catch: console.log(error); and a friendly message.
// Check: 2 summary cards (20, 15) and 20 character cards with pictures.

const url = "";


async function loadCharacters() {
  // Step 1 goes here

}

loadCharacters();


// ==================== Steps 2, 3 and 4 go in here ====================
function showSummaries(characters) {
  addSummary("Characters", characters.length);

  // ---------- Step 2: filter (KEEP some) ----------
  // EXAMPLE: keep only the humans.
  // filter runs the function once per character. Return true = keep it. false = leave it out.
  const humans = characters.filter(function (character) {
    return character.species === "Human";
  });
  console.log("Humans:", humans);
  addSummary("Humans", humans.length);

  // YOUR TURN: keep only the characters whose status is "Dead".
  // Copy the example below it, then change: humans → dead, species → status, "Human" → "Dead"
  // Show how many with addSummary("Dead", dead.length).
  // Check: 6. That's the 6 gray cards.


  // ---------- Step 3: map (CHANGE every one) ----------
  // EXAMPLE: turn 20 character objects into 20 names.
  // map runs the function once per character, and keeps whatever you RETURN.
  const names = characters.map(function (character) {
    return character.name;
  });
  console.log("Names:", names);

  // YOUR TURN: how many episodes is each character in? (Step 4 adds these up.)
  // Copy the example below it, then change:
  //   names → episodeCounts,  character.name → character.episode.length,  "Names:" → "Episodes:"
  // Check: the console shows Episodes: and 20 numbers, starting 51, 51, 42, 42...


  // ---------- Step 4: reduce (SQUISH into one) ----------
  // EXAMPLE: add up your episodeCounts from Step 3 (51 + 51 + 42 + ...).
  // total starts at 0 (the 0 at the end). Each time, return the new total.
  // It needs your Step 3, so it starts OFF. Turn it on: select the 4 lines below, press Ctrl+/ (Cmd+/ on a Mac).
  // const totalEpisodes = episodeCounts.reduce(function (total, number) {
  //   return total + number;
  // }, 0);
  // addSummary("Episodes, all added up", totalEpisodes);

  // YOUR TURN: the AVERAGE episodes per character (total ÷ 20, rounded). Write this one line:
  //   addSummary("Average episodes", Math.round(totalEpisodes / episodeCounts.length));
  // Check: a card that says 12.

}


// ---------- Extra (if you finish early) ----------
// 1. A Toggle status button on every card. In showCards (at the bottom), just before column.appendChild(card);
//      const toggle = document.createElement("button");
//      toggle.textContent = "Toggle status";
//      toggle.className = "btn btn-danger btn-sm mt-2";
//      toggle.addEventListener("click", function (event) {
//        event.stopPropagation();   // stops this click from ALSO flipping the card
//        card.classList.toggle("dead");
//      });
//      front.appendChild(toggle);
//    classList.toggle adds the class if it's not there, and takes it away if it is.
//    Check: click it on Rick. His card goes gray, and does NOT flip. Click again: back to normal.
// 2. Who's alive? filter the "Alive" characters, then map those to their names,
//    and console.log the names. (Check: 8 names, starting Rick Sanchez, Morty Smith.)
// 3. Count your favorite species: "Alien" (Check: 5).
// 4. Most episodes: reduce can keep the biggest one instead of a total:
//      const star = characters.reduce(function (best, character) {
//        if (character.episode.length > best.episode.length) {
//          return character;
//        }
//        return best;
//      });
//      addSummary("Most episodes", star.name);   (Check: Rick Sanchez)
// 5. Back to the docs: find "Filter characters". Change your url so the API sends
//    ONLY dead characters. (Check: all 20 cards are gray, and Dead says 20.)




// ==================== READY-MADE: no need to read below this line ====================
// addSummary, addDetail and showCards build the page for you. You only call them.
// =====================================================================================

// Makes one summary card. You just call it: addSummary("Humans", 15);
function addSummary(label, value) {
  const column = document.createElement("div");
  column.className = "col-6 col-md-4";

  const card = document.createElement("div");
  card.className = "card h-100 text-center p-3";

  const number = document.createElement("p");
  number.className = "display-6 fw-bold mb-0";
  number.textContent = value;

  const text = document.createElement("p");
  text.className = "mb-0 text-secondary";
  text.textContent = label;

  card.appendChild(number);
  card.appendChild(text);
  column.appendChild(card);
  summary.appendChild(column);
}


// Adds one line of details to the back of a card, like "Gender: Male".
function addDetail(back, label, value) {
  const line = document.createElement("p");
  line.className = "small mb-1";
  line.textContent = `${label}: ${value}`;
  back.appendChild(line);
}


// Makes one FLIP card per character.
//   card  = the whole card (click it to flip)
//   front = picture, name, species and status
//   back  = the details
// Dead characters get the class "dead" (see style.css).
function showCards(characters) {
  characters.forEach(function (character) {
    const column = document.createElement("div");
    column.className = "col-6 col-md-4 col-lg-3";

    const card = document.createElement("div");
    card.className = "flip-card h-100";

    const inner = document.createElement("div");
    inner.className = "flip-inner";

    // ----- FRONT -----
    const front = document.createElement("div");
    front.className = "card face front p-2";

    const picture = document.createElement("img");
    picture.src = character.image;
    picture.alt = character.name;
    picture.className = "img-fluid rounded mb-2";
    front.appendChild(picture);

    const name = document.createElement("h3");
    name.className = "h6 mb-1";
    name.textContent = character.name;
    front.appendChild(name);

    const info = document.createElement("p");
    info.className = "small mb-0";
    info.textContent = `${character.species} · ${character.status}`;
    front.appendChild(info);

    // ----- BACK -----
    const back = document.createElement("div");
    back.className = "card face back p-3";

    const backName = document.createElement("h3");
    backName.className = "h6 mb-2";
    backName.textContent = character.name;
    back.appendChild(backName);

    addDetail(back, "Status", character.status);
    addDetail(back, "Species", character.species);
    addDetail(back, "Gender", character.gender);
    addDetail(back, "From", character.origin.name);       // origin is an object: dig in with .name
    addDetail(back, "Now at", character.location.name);   // same for location
    addDetail(back, "Episodes", character.episode.length);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Click: flip it. Click again: flip it back.
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });

    // classList.add puts one more class on an element, and keeps the ones it has.
    if (character.status === "Dead") {
      card.classList.add("dead");
    }

    column.appendChild(card);
    characterList.appendChild(column);
  });
}
