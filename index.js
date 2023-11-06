// Import the dotenv package to load environment variables
require('dotenv').config();

// Import the Rookout SDK
const rookout = require('rookout');

// Access your environment variables
const rookoutToken = process.env.ROOKOUT_TOKEN;
const rookoutLabels = process.env.ROOKOUT_LABELS;

// Initialize the Rookout SDK with your token
rookout.start({ token: rookoutToken });

// Your Node.js application code goes here
// ...

// Example: Print the loaded environment variables
console.log("ROOKOUT_TOKEN:", rookoutToken);
console.log("ROOKOUT_LABELS:", rookoutLabels);
