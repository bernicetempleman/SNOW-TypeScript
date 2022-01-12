var Person = /** @class */ (function () {
    //constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        return "Hi" + this.firstName + this.lastName;
    };
    return Person;
}());
var p = new Person("J", "S");
console.log(p.fullName());
