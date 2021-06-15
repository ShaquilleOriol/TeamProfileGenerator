const Employee = require("./employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);

        if(typeof school !== "string") {
            throw new Error(" 'school' to be a string");
        };

        this.school = school.charAt(0).toUpperCase() + school.substr(1);
        this.role = "Intern";
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;