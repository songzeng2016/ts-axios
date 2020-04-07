class User {
    fullName: string;
    firstName: string;
    lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
}

interface Person {
    firstName: string,
    lastName: string,
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`
}

const user = new User('Song', 'Zeng')

console.log(greeter(user))