import { UserService } from './user.service';
import { User } from "@snackyoo/domain";
import { Offset } from "../shared/Offset";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(offset: Offset): User[];
}
