# Express.js - Handling Malformed JSON in POST Requests

This repository demonstrates a common issue in Express.js applications: handling improperly formatted JSON data sent in POST requests.  If the client sends data that cannot be parsed as JSON (e.g., due to syntax errors or incorrect content type), the `req.body` will be empty, leading to unexpected behavior or errors.

The `bug.js` file showcases the problem. The solution, presented in `bugSolution.js`, addresses this by adding error handling to gracefully manage malformed JSON.

## Problem

When a client sends malformed JSON, the Express.js `express.json()` middleware fails silently. This results in an empty `req.body`, leading to potential bugs and unexpected application behavior.

## Solution

The solution adds error handling to catch parsing errors and provide more informative responses to the client. This prevents unexpected failures and improves application robustness.
