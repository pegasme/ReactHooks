export default class User implements IUser {
    constructor(firstName: string, lastName: string) {
        this.lastName = lastName;
        this.firstName = firstName;
    }

    firstName: string;
    lastName: string;

    get name() {
        return `${this.firstName} ${this.lastName}`;
    }
}

export interface IUser {
    firstName: string;
    lastName: string;
}