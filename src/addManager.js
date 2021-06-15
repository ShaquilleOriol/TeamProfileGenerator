const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/team.html";
const cards = require("./makeCard");
const ask = require("./askMember");
const Manager = require("../lib/manager");

exports.addManager = () => {
    inquirer.prompt([
        {
            type : "input",
            name : "name",
            message : "Enter manager name:",
        },
        {
            type : "input",
            name : "id",
            message : "Enter manager id:",
        },
        {
            type : "input",
            name : "email",
            message : "Enter manager email:",
        },
        {
            type : "input",
            name : "officeNum",
            message : "Enter manager office number:",
        },
    ])
    .then((data) => {
        const obj = new Manager(data.name, data.id, data.email, data.officeNum);
        fs.appendFileSync(filePath,cards.makeCard(obj));
        ask.askMember();
    })
};