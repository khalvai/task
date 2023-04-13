import { HttpException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { errorMonitor } from 'events';
import { AuthRespository } from 'src/auth/auth.repository';
import { AuthService } from 'src/auth/auth.service';

describe('auth service', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AuthService, AuthRespository],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('should be defined', () => {
    it('should be defined ', () => {
      expect(authService).toBeDefined();
    });
  });

  describe('find method', () => {
    it('should return user', async () => {
      const user = await authService.findById(1);
      expect(user.name).toBe('ali');
      expect(user.id).toBeGreaterThan(0);
    });
  });

  it('throw error', async () => {

    try{
        await authService.findById(222222)
    }catch(error){
        expect(error).toBeInstanceOf(HttpException)
    }
})
});
