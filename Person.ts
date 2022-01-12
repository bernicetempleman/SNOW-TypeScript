class Person {
    //fields
    firstName: string;
    lastName: string;

    //constructor
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;

    }

    fullName(){
        return  "Hi "+ this.firstName + this.lastName;
    }

}

let p = new Person("J", "S");
console.log(p.fullName());
