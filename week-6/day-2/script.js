// Week 6 Day 2 — Ask Rick: a request that needs a key
// It's your Week 5 "Ask Gemini" request (Postman or Bruno), written in JavaScript.
// The AI answers as Rick Sanchez. (The Rick and Morty API from Monday needs no key. Gemini does.)
// The key comes from config.js (which Git ignores), NOT from this file.

const questionBox = document.getElementById("question");
const askButton = document.getElementById("ask-btn");
const statusText = document.getElementById("status");
const answer = document.getElementById("answer");

const url =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent";

// Tells the AI who to be. It goes in front of every question.
// const character =
//   "You are Rick Sanchez from Rick and Morty. Answer in 2 short sentences, and keep it friendly. ";
const character =
  "You are Morty Smith from Rick and Morty. Answer in 2 short sentences, and keep it friendly. ";

async function askRick() {
  if (questionBox.value.trim() === "") {
    statusText.textContent = "Type a question first.";
    answer.textContent = "";
    return;
  }
  // No config.js yet? Say so, instead of a confusing red error.
  if (typeof GEMINI_KEY === "undefined") {
    statusText.textContent =
      "No key found. Make config.js first (see config.example.js).";
    return;
  }

  answer.textContent = "";
  statusText.textContent = "Thinking...";

  try {
    // ---------- Step 2: the request (same 3 parts as in your API tool) ----------
    // EXAMPLE: method, headers (the KEY goes here), body.
    // Right now it always asks the same question.
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${character} ${questionBox.value}` }] }],
      }),
    });
    // YOUR TURN: send the user's question instead.
    // Inside the backticks, change:  Say hello in one line.  →  ${questionBox.value}
    // Keep  ${character}  in front, so Rick still answers.

    if (!response.ok) {
      statusText.textContent = `The AI said no (status ${response.status}). Is your key right?`;
      return;
    }

    const data = await response.json();
    console.log(data);
    statusText.textContent = "";

    // ---------- Step 3: dig out the text ----------
    // EXAMPLE: shows the whole response as text. Hard to read!
    answer.textContent = data.candidates[0].content.parts[0].text;

    // YOUR TURN: show ONLY the AI's answer. You found the path in your API tool last week:
    //   data.candidates[0].content.parts[0].text
    // Change the example line above to use it.
  } catch (error) {
    statusText.textContent = "Can't reach the AI. Check your internet.";
  }
}

askButton.addEventListener("click", askRick);

// ---------- Extra (if you finish early) ----------
// 1. Change who answers: edit the  character  line to be Morty, Summer, or anyone you like.
//
// 2. Some APIs take the key in the URL instead of a header. Gemini accepts both.
//    a. Delete the "x-goog-api-key" header line.
//    b. Change the fetch address to:  `${url}?key=${GEMINI_KEY}`
// It still works. Now open DevTools → Network, click the request, and look at the URL.
// Your key is right there in the address! Addresses get saved in browser history and
// server logs. That's why a header is the safer place for a key.
// (Put the header back when you're done.)
