const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const util = require("util");
// const axios = require("axios");

const api = require("./utils/api")

const generateMarkdown = require("./utils/generateMarkdown");
// const writeFileAsync = util.promisify(fs.writefile);


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
    // writeFileAsync(fileName, data).then(function () {
    //     console.log('README file created.');
    // })
    //     .catch(err => {
    //         console.log(err);
    //     })
}

function inti() {
    inquirer.prompt(questions).then(response => {
        api.getUser(response.github)
            .then(({data}) => {
                writeToFile("README.MD", generateMarkdown({ ...response, ...data }));
            })



    // .then(response => {
    //     const queryURL = `https://api.github.com/users/${response.github}`;
    //     axios.get(queryURL)
    //         .then(res => {
    //             const data = {
    //                 username: response.username,
    //                 title: response.title,
    //                 description: response.description,
    //                 tableOfContents: response.tableOfContents,
    //                 installation: response.installation,
    //                 usage: response.usage,
    //                 test: response.test,
    //                 license: response.license,
    //                 contributing: response.contributing,

    //                 name: res.data.login,
    //                 email: "joesantos123@live.com",
    //                 profilePic: res.data.avatar_url,
    //             }
    //             const readmeContent = generateMarkdown(data);
    //             writeToFile('README-test.md', readmeContent);
    //         })
    //         .catch(err => {
    //             if (err) throw Error;
    //         })

    // })
    // .catch(err => {
    //     console.log(err);

});
}

    inti();