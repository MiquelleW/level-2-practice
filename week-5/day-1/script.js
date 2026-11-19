// Week 5 Day 1 — fetch: the request from your API tool, from JavaScript
// fetch sends a request, just like the Send button in Postman or Bruno.
// The answer takes time to come back, so we WAIT for it with await.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does (console + page).
//   2. Copy it under YOUR TURN, or change it where the comment says.

// First: put YOUR truck's city here. Get the numbers from your "Find my city" request.
const latitude = 35.22709;
const longitude = -80.84313;

// The same address you sent in your API tool, built from the pieces.
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit`;

// const url = "https://digimon-api.vercel.app/api/digimon";

// ---------- Step 1: Send the request ----------
// EXAMPLE: async = "this function has waiting in it". await = "wait here until it's back".
async function getWeather() {
  const response = await fetch(url); // 1. send the request, wait for the answer
  console.log("Status:", response.status); // 2. same status your API tool showed you (200 = OK)
  const data = await response.json(); // 3. read the body as JSON, wait again
  console.log(data); // 4. the same body your API tool showed you

  // ---------- Step 2: Dig out one value ----------
  // EXAMPLE: the body is an object. Use dots to walk into it, like in your API tool's body view.
  console.log("Temperature:", data.current.temperature_2m);

  // YOUR TURN: log the wind speed. Find its name in the console's object first.
  console.log("Wind speed: ", data.current.wind_speed_10m);

  // ---------- Step 3: Put it on the page ----------
  // EXAMPLE: the number, plus its unit (the unit lives in current_units).
  const weather = document.getElementById("weather");
  weather.textContent =
    "Temperature: " +
    data.current.temperature_2m +
    " " +
    data.current_units.temperature_2m +
    " " +
    "Wind Speed: " +
    data.current.wind_speed_10m +
    " " +
    data.current_units.wind_speed_10m;
  // YOUR TURN: don't copy this one. Change the example above,
  // so the page also shows the wind speed and its unit.
}

getWeather();

// ---------- Extra (if you finish early): who prints first? ----------
// Guess first: does this line print BEFORE or AFTER "Status: 200"? Save and check.
// It prints before because await pauses the weather function, but the rest of the script keeps running.

// Why? (Hint: the browser doesn't stop and wait for the weather. Only getWeather waits.)
console.log("This line is at the bottom of the file.");

// ---------- Extra 2: fetch with NO await ----------
// This line sends the same request, but there's no await in front of fetch.
// Guess first: will the console show the weather after "No await:"? Find it in the console and check.
// Without await, fetch returns a promise instead of the actual weather data.

// Why? (Hint: without await, you get the order ticket, not the food.)
console.log("No await:", fetch(url));

// My first weather request used Austin and my second request used Charlotte.
// I changed the latitude and longitude to get Charlotte's weather information.
// Both requests returned a 200 OK status, but the temperature and wind speed values were different.
