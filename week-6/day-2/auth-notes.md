# Week 6 Day 2 — Auth notes

Write 1–2 sentences for each, in your own words. **No keys in this file**: it gets pushed.

## API key

What is it for?

An API key is a secret code that identifies an account when an application makes a request to an API. This helps the API know which account is making the request.

## OAuth

What is it for? (Think: "Sign in with Google" on another website.)

OAuth allows one application to access specific information from another application without needing the user's password.

## JWT

What is it for? (Think: the wristband you get after showing your ID at the door.)

A JWT is a signed token a server gives you after you log in. You use that token to prove you're authenticated when making future requests, until it expires.

## Where did my key live today?

Which file, and why doesn't it get pushed?

My API key lived in config.js. Git does not push this file because it is listed in the folder's .gitignore file.

## Could I put this page on GitHub Pages? Why not?

No, because the browser exposes the API key when it sends a request to Gemini. Anyone visiting the public page could inspect the request and copy my key.
