const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const engineerArray = [];
const managerArray = [];
const internArray = [];
const cardArray = [];

const promptUser = () => {
    return inquirer.prompt([{
        type: 'confirm',
        name: 'start',
        message: 'Start Team Profile',
    }])
    .then((answer) => {
        if (answer.start === true){promptUser2()}
        else console.log(`Thank you! Feel free to run Team Generator again.`)})
    .catch()

};

const promptUser2 = () => {
    return inquirer.prompt([{

        type: 'input', 
        name: 'managerName',
        message: 'Insert team manager name.'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Insert team manager employee ID.'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Insert team manager email address.',
    },
    {
        type: 'input',
        name: 'office',
        message: 'Insert your Manager office number',
    }

])
.then((answer) => {
    const teamManager = new Manager(answer.managername.trim(),answer.managerid.trim(), answer.manageremail.trim(), answer.office.trim());
    managerArray.push(teamManager);
    promptChoices();
})
.catch()}
const promptChoices = () => {
    return inquirer.prompt([
        {
            type: 'list', 
            name: 'choices',
            message: 'select one of the following',
            choices: ['Intern', 'Engineer', 'Team Complete']
        }])
        .then((answer) => {
            if(answer.choices === `Engineer`){promptEngineer()}
            else if (answer.choices === `Intern`){promptIntern()}
            else if (answer.choices === `Team Assembled`) {
               console.log('Creating Webpage!');
               writeTeamProfile();}
            
         })
           .catch() }
         const promptEngineer = () => {
           return inquirer.prompt([
         {
           type: 'input',
           name: 'engineername',
           message: 'Name of the engineer?',
         },
         {
           type: 'input',
           name: 'engineerid',
           message: 'Engineers employee ID number?',
         },
         {
           type: 'input',
           name: 'engineeremail',
           message: 'Email address of the engineer?',
         },
         {
           type: 'input',
           name: 'githubname',
           message: 'Github username of the engineer?',
         }])
         .then((a) => {
           const eng = new Engineer(a.engineername.trim(), a.engineerid.trim(), a.engineeremail.trim(), a.githubname.trim());
           engineerArray.push(eng);
           promptChoices();
         })
           .catch()}
         const promptIntern = () => {
           return inquirer.prompt([
         {
          type: 'input',
          name: 'internname',
          message: 'Name of the intern?',
         },
         {
           type: 'input',
           name: 'internid',
           message: 'Employee ID number of the intern?',
         },
         {
           type: 'input',
           name: 'internemail',
           message: 'Email address of the intern?',
         },
         {
           type: 'input',
           name: 'internschool',
           message: 'Name school the intern attends/attended?',
         }])
         .then((ans) => {
             const int = new Intern(ans.internname.trim(), ans.internid.trim(), ans.internemail.trim(), ans.internschool.trim());
             internArray.push(int)
             promptChoices();
         })
         .catch();
         
     };
   promptUser();
   
   const writeTeamProfile = () => {
       managerArray.forEach(Manager => {
           const managerCard = `<div class="card" style="width: 18rem;">
           <div class="card-header manager">
           ${Manager.name}<br>
           <i class="fas fa-clipboard-check"></i> Manager
           </div>
           <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${Manager.Id}</li>
           <li class="list-group-item">Email: <a href = "mailto: ${Manager.email}">${Manager.email}</a></li>
           <li class="list-group-item">Office: ${Manager.officeNumber}</li>
           </ul>
           </div>`;
           cardArray.push(managerCard);
           });
       engineerArray.forEach(Engineer => {
           const engineerCard =`<div class="card" style="width: 18rem;">
           <div class="card-header engineer">
           ${Engineer.name}<br>
           <i class="fas fa-feather"></i> Engineer
           </div>
           <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${Engineer.Id}</li>
           <li class="list-group-item">Email: <a href = "mailto: ${Engineer.email}">${Engineer.email}</a></li>
           <li class="list-group-item">Github: <a href="https://www.github.com/${Engineer.Githubname}" target="_blank">${Engineer.Githubname}</a></li>
           </ul>
           </div>`;
           cardArray.push(engineerCard);
           });
       internArray.forEach(Intern => {
           const internCard = `<div class="card" style="width: 18rem;">
           <div class="card-header intern">
           ${Intern.name}<br>
           <i class="fas fa-graduation-cap"></i> Intern
           </div>
           <ul class="list-group list-group-flush">
           <li class="list-group-item">ID: ${Intern.Id}</li>
           <li class="list-group-item">Email: <a href = "mailto: ${Intern.email}">${Intern.email}</a></li>
           <li class="list-group-item">School: ${Intern.schoolName}</li>
           </ul>
           </div>`;
           cardArray.push(internCard);
       });
       writeHTML(); 
   }
   const writeHTML = () => {
       teamProfile =`<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
           <title>Your Team Profile</title>
           <style>
               body, html {
                   height: 100%;
               }
               header {
                   text-align: center;
                   padding: 2%;
                   font-size: 5em;
                   color: white;
                   background: rgb(56,6,80);
                   background: linear-gradient(47deg, rgba(56,6,80,1) 0%, rgba(16,16,106,1) 53%, rgba(1,109,131,1) 100%);            height: 15%;
                   }
               .card {
                   margin: 1%;
                   box-shadow: 5px 5px 3px 1px #999;
               }
               .manager {
                   background-color: rgb(251, 41, 41);
                   color: white;
                   text-align: center;
                   font-weight: 700;
                   font-size: 1.5em;
                   }
               .engineer {
                   background-color: blue;
                   color: white;
                   text-align: center;
                   font-weight: 700;
                   font-size: 1.5em;
                   }
               .intern {
                   background-color: rgb(68, 208, 255);
                   text-align: center;
                   font-weight: 700;
                   font-size: 1.5em;
                   }
           </style>
       </head>
       <body>
       <header>Team Profile</header>
       <main class="container fluid">
           <section class="row" id="cards">
           ${cardArray.join('')}
           </section>
       </main>
       <script src="https://kit.fontawesome.com/347692fd4f.js" crossorigin="anonymous"></script>    
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>    
       </body>
       </html>`
       fs.writeFile('./dist/teamprofile.html', teamProfile, (err) => console.error(err));
   }