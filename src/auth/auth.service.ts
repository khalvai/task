import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { User } from 'src/common/interfaces/user.interface';
import { AuthRespository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRespository) {}

  async findById(id: number): Promise<User | undefined> {
    const user = await this.authRepository.findOne(id);

    if (!user) throw new BadRequestException("user dosen't exists");
    // for simplicity i just return the user
    return user;
  }
}
