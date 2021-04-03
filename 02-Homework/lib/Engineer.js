const Employee = require('./Employee');

class Engineer extends Employee {
    
    constructor(name, email, Github, Id){
        
        super(name, Id, email);
        
        this.Githubname = Github;
    }
    getGithub(){
        return `https://www.github.com/${this.Github}`
    }
    
    getRole(){
        return `Engineer`
    }
}

module.exports = Engineer;