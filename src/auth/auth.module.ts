import { Module } from '@nestjs/common';
import { AuthRespository } from './auth.repository';

import { AuthService } from './auth.service';
@Module({
  providers: [AuthRespository, AuthService],
})
export class AuthModule {}
