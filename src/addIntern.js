const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/team.html";
const cards = require("./makeCard");
const ask = require("./askMember");
const Intern = require("../lib/intern");

exports.addIntern = () => {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter intern name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter intern id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter intern email:",
        },
        {
            type : "input",
            name : "school",
            message : "Enter intern school:",
        },
    ])
    .then((data) => {
        const obj = new Intern(data.name, data.id, data.email, data.school);
        fs.appendFileSync(filePath,cards.makeCard(obj));
        ask.askMember();
    })
};