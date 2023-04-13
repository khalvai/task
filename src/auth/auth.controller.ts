import { Get, Param, ParseIntPipe } from '@nestjs/common';
import { AuthService } from './auth.service';

export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.authService.findById(id);
  }
}
