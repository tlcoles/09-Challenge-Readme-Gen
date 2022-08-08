// Require inquirer as a dependency
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's your project title?"
    },
    {
        type: "editor",
        name: "description",
        message: "Please describe your project in two to three lines.For example, \n * Why did you start this project? \n * What problem will it solve? * For whom did you design it?"
    },
    {
        type: "editor",
        name: "installation",
        message: "What steps are required to install your project?"
    },






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// Create variables
const HASH = "\u0023"
const HASH2 = "\u0023\u0023"
let title = "";

/**
 *  Create a sample list of template literals
 *   
 *  `$(HASH) ${title}`
 *  `$(HASH2) ${installation}`
 *  `$(HASH2) ${usage}`
 *  `$(HASH2) ${license}`
 *  `$(HASH2) ${contributing}`
 *  `$(HASH2) ${tests}`
 *  `$(HASH2) ${questions}`
**/