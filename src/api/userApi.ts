import User, { IUser } from "../entities/User";

export const getUser = (userId: string | number): IUser => {
    console.log(userId);
    return new User("Super", "Admin");
}