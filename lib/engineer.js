const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        
        if(typeof github !== "string") {
            throw new Error(" 'gitHub' to be a string");
        };
        
        this.github = github;
        this.role = "Engineer";
    };

    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;