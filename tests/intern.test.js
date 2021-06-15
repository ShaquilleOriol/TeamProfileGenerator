const Intern = require("../lib/intern");
const name = "Shaquille";
const id = 5;
const email = "shaquille.oriol@gmail.com";
const school = "University of Texas at Austin";

describe("Intern", () => {
    describe("Initialization", () => {

        it("should throw an error with an invalid school input", () => {
            const cb = () => new Intern(name,id,email,[]);
            const err = new Error("'school' to be a string");

            expect(cb).toThrowError(err);
        });

        it("should return an object with properties: name, id, email, role, and school when called with the 'new' keyword", () => {
            const obj = new Intern(name,id,email,school);
            
            expect(obj.role).toEqual("Intern");
            expect(obj.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("should return the school of the intern", () => {
            const obj = new Intern(name,id,email,school);
            const objSchool = obj.getSchool();

            expect(objSchool).toEqual(school);
        });
    });
});