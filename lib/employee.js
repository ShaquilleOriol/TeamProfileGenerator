class Employee {
    constructor(name,id,email) {

        if(typeof name !== "string" || !name.trim().length) {
            throw new Error(" 'name' to be a non empty string");
        };

        if(!Number.isInteger(Number(id)) || Number(id) < 0) {
            throw new Error("'id' to be a positive integer");
        };

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("'email' to be a valid email address");
        };

        this.name = name.charAt(0).toUpperCase() + name.substr(1);
        this.id = id;
        this.email = email;
        this.role = "Employee";
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;