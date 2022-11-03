import { User } from './user.entity';

export class UserResponse {
    data: User[];
    msg: string;
}
