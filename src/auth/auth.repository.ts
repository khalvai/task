import { Injectable } from '@nestjs/common';
import { User } from 'src/common/interfaces/user.interface';

const users: Array<User> = [
  { id: 1, name: 'ali' },
  { id: 2, name: 'reza' },
  { id: 3, name: 'mostafa' },
  { id: 4, name: 'mohesn' },
];

@Injectable()
export class   AuthRespository {
  constructor() {}

  //i made this function async because i used array but in reall worl app it takes time to read from db
  async findOne(id: number): Promise<User> {
    return users.find((user) => user.id === id);
  }


}
