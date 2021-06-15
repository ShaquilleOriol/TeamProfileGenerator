const Manager = require("../lib/manager");
const name = "Shaquille";
const id = 5;
const email = "shaquille.oriol@gmail.com";
const officeNum = 777;

describe("Manager", () => {
    describe("Initialization", () => {

        it("should throw an error with an invalid office number input", () => {
            const cb = () => new Manager(name,id,email,"corner office");
            const err = new Error("Expected parameter 'office number' to be a number");

            expect(cb).toThrowError(err);
        });

        it("should return an object with properties: name, id, email, role, and office number when called with the 'new' keyword", () => {
            const obj = new Manager(name,id,email,officeNum);
            
            expect(obj.role).toEqual("Manager");
            expect(obj.officeNum).toEqual(officeNum);
        });
    });

    describe("getOfficeNum", () => {
        it("should return the office number of the manager", () => {
            const obj = new Manager(name,id,email,officeNum);
            const objOfficeNum = obj.getOfficeNum();

            expect(objOfficeNum).toEqual(officeNum);
        });
    });
});