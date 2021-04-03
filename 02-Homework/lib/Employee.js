class Employee {

    constructor(Id, email, name) {

        this.name = name;
        this.email = email;
        this.Id = Id;
    }

    getRole(){
        return `Employee`
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getID(){
        return this.Id
    }
}

module.exports = Employee;