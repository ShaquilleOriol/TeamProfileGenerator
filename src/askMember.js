const fs = require("fs");
const inquirer = require("inquirer");
const filePath = "./dist/team.html";
const intern = require("./addIntern");
const engineer = require("./addEngineer");
const htmlEnd = 
`        </div>
    </div>
</body>
</html>`;

exports.askMember = () => {
    inquirer.prompt([
        {
            type : "list",
            name : "choice",
            message : "Add a new member?",
            choices : ["Engineer","Intern","No, we're done here"],
        },
    ])
    .then((data) => {
        if (data.choice === "No, we're done here") {
            fs.appendFileSync(filePath,htmlEnd);
        } else if (data.choice === "Engineer") {
            engineer.addEngineer();
        } else {
            intern.addIntern();
        }
    })
};