import { UserService } from './user/user.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: UserService);
    getHello(): string;
}
