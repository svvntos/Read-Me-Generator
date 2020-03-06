const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const util = require("util");
const api = require("./utils/api");
// const axios = require ("axios")
const generateMarkdown = require("./utils/generateMarkdown");
// const asyncFunctionWrite = util.promisify(fs.writeFile);
// const asyncFunctionRead = util.promisify(fs.readFile)

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
    message: "What command to run the testing for this application?",
    name: "tests"
  },
  {
    type: "input",
    message: "What should the user know to use this page?",
    name: "usage",
    default: "Usage"
  },
  {
    type: "input",
    message: "How would the user be able to contribute?",
    name: "contributing"
  },
  {
    type: "input",
    message: "License",
    name: "license",
    default: "MIT"
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
//   (fileName, data)
    // .then(function() {
    //   console.log("Success");
    // })
    // .catch(error => {
    //   console.log("faliure");
    // });
}

function init() {
  inquirer.prompt(questions).then(response => {

    // axios
    api
      .getUser(response.github)
      .then(({data})=>{
          writeToFile("README.MD", generateMarkdown({...response, ...data}));
          
      })
    //   .then(response => {
    //     const data = {
    //       username: response.github,
    //       title: response.title,
    //       description: response.description,
    //     //   TableOfC,
    //       installation: response.installation,
    //       usage: response.usage,
    //       tests: response.tests,
    //       liscence: response.liscence,
    //       contribution: response.contribution,
    //       name: response.data.login,
    //     //   email: "emersondowning@gmail.com",
    //       profilePhoto: response.data.avatar_url
    //     };
    //     const renderedContent = generateMarkdown(data);
    //     asyncFunctionRead("READme.md", readmeContent);
    //   })
    //   .catch(error => {
    //     if (error) throw error;
    //   });
  });
}

init();