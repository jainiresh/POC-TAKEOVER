// Import the dotenv package to load environment variables
require('dotenv').config();

// Access your environment variables
const rookoutToken = process.env.ROOKOUT_TOKEN;
const rookoutLabels = process.env.ROOKOUT_LABELS;

// Your Node.js application code goes here
// ...

// Example: Print the loaded environment variables
console.log("ROOKOUT_TOKEN:", rookoutToken);
console.log("ROOKOUT_LABELS:", rookoutLabels);

