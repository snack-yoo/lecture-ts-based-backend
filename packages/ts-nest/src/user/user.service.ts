import { Injectable } from '@nestjs/common';
import {Authentication, User} from "@snackyoo/domain";

@Injectable()
export class UserService {
  constructor(
      private readonly userStore: UserService,
      private readonly authenticationStore: Auth
  ) {}

  register(signupInfo: Omit<User, 'id'> & Omit<Authentication, 'userId'>) {
    const { name, secret, type } = signupInfo;


  }

  findAll(): User[] {
    return [];
  }
}
