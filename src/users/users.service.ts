import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponse } from './entities/response.entity';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  users: User[] = [];

  create(createUserDto: CreateUserDto): UserResponse {
    this.users.push({id: Math.random(), ...createUserDto})
    return {data: [], msg: "User created"};
  }

  findAll(): UserResponse {
    return {data: this.users, msg: ""};
  }

  findOne(id: number): UserResponse {
    let singleUser = this.users.filter((item) => {
      return item.id === id;
    });
    return {data: singleUser, msg: ""};
  }

  update(id: number, updateUserDto: UpdateUserDto): UserResponse {
    let index= this.users.findIndex(item => item.id === id); 
    if (index == -1) {
      return {data: [], msg: "No user found"};
    } else {
      this.users[index] = {...this.users[index], ...updateUserDto};
      return {data: this.users, msg: "User updated"};
    }
  }

  remove(id: number): UserResponse {
    let index= this.users.findIndex(item => item.id === id); 
    if (index == -1) {
      return {data: [], msg: "No user found"};
    } else {
      this.users.splice(index, 1);
      return {data: this.users, msg: "User removed"};
    }
  }
}
