const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, email, Id, officeNumber){
    
        super(name, Id, email);
    
        this.officeNumber = officeNumber;
}

getRole(){
    return `Manager`
}
}

module.exports = Manager;