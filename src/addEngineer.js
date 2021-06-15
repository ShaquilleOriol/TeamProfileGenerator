const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/team.html";
const cards = require("./makeCard");
const ask = require("./askMember");
const Engineer = require("../lib/engineer");

exports.addEngineer = () => {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter engineer name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter engineer id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter engineer email:",
        },
        {
            type : "input",
            name : "github",
            message : "Enter engineer GitHub username:",
        },
    ])
    .then((data) => {
        const obj = new Engineer(data.name, data.id, data.email, data.github);
        fs.appendFileSync(filePath,cards.makeCard(obj));
        ask.askMember();
    })
};