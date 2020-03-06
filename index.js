const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writefile);


const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
        default: "username"
    },
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title",
        default: "Title"
    },
    {
        type: "input",
        message: "Add a description for your project.",
        name: "description",
        default: "Description"
    },
    {
        type: "input",
        message: "What command to install the necessary packages?",
        name: "installation",
        default: "Installation"
    },
    {
        type: "input",
        message: "What should the user know to use this page?",
        name: "usage",
        default: "Usage"
    },
    {
        type: "input",
        message: "What command to run the testing for this application?",
        name: "tests",
    },
    {
        type: "input",
        message: "How would the user be able to contribute?",
        name: "contributing",
    },
    {
        type: "input",
        message: "License",
        name: "license",
        default: "MIT"
    },
];

function writeToFile(fileName, data) {
    writeFileAsync(fileName, data).then(function () {
        console.log('README file created. ')
    })
}

function init() {
    inquirer.prompt(questions).then(response => {
        api

    })
}