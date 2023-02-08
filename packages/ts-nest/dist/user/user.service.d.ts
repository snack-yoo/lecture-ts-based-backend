import { Authentication, User } from "@snackyoo/domain";
export declare class UserService {
    register(signupInfo: Omit<User, 'id'> & Omit<Authentication, 'userId'>): void;
    findAll(): User[];
}
