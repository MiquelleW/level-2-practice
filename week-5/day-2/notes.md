# Week 5 Day 2 — Three requests, side by side

Fill this in from Postman or Bruno. **Never paste your API key in this file.**
This repo is public: anyone on the internet can read it.
Write `{{gemini_key}}` (the variable's name) instead.

|                                                                                 | Weather request                          | AI request                                                                                         | Add a dish                          |
| ------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Method (GET / POST)                                                             | GET                                      | POST                                                                                               |                                     |
| Endpoint (the address, filled in for you)                                       | `https://api.open-meteo.com/v1/forecast` | `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent` | `https://dummyjson.com/recipes/add` |
| Where the details go (query params or body?)                                    | Query parameters (URL)                   | Body (JSON)                                                                                        |                                     |
| Headers I needed                                                                | None required                            | x-goog-api-key: {{gemini_key}}                                                                     |                                     |
| Does it need a key?                                                             | No                                       | Yes, {{gemini_key}}                                                                                |                                     |
| Status I got                                                                    | 200 OK                                   | 200 OK                                                                                             |                                     |
| The part of the response I care about (the path, like `current.temperature_2m`) | `current.temperature_2m`                 | `candidates[0].content.parts[0].text`                                                              |                                     |

## What was different?

Write 2–3 sentences in your own words.
The AI request and Add a dish are both POST. What job does each one do?

The Weather API uses GET to retrieve weather information using parameters in the URL. The Gemini AI API uses POST to send a question in the JSON body and receive an AI response. The Gemini AI API requires an API key, where the Weather API does not.

## Did my dish really save?

What status did `Get my dish` give you? What does that tell you?

## Extra (if you finish early)

- Send the same prompt twice. Is the answer the same? Why might that be?
- Try a different model name in the address. What changed in the response?
