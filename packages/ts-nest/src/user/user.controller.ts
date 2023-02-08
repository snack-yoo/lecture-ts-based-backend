import {Controller, Get, Post, Put, Delete, Query, Body} from '@nestjs/common';
import { UserService } from './user.service';
import {User} from "@snackyoo/domain";
import {Offset} from "../shared/Offset";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Body() offset: Offset): User[] {
    console.log(JSON.stringify(offset));
    return this.userService.findAll();
  }
}
