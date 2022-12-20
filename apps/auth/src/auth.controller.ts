import { SignupInput } from './dto/signup.input';
import { LoginInput } from './dto/login.input';
import { Controller, Logger, Body, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthApiError } from '@supabase/supabase-js';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(private readonly appService: AuthService) { }
  private readonly logger = new Logger(AuthController.name);

  @Post('signup')
  async signup(@Body() data: SignupInput, @Res() res: Response) {
    this.logger.log('GET /auth/email called');
    const result = await this.appService.signup(data.email, data.password);
    if (result instanceof AuthApiError) {
      return res.status(result.status).json(result);
    }
    return result;
  }

  @Post('email')
  async authEmail(@Body() data: LoginInput) {
    this.logger.log('GET /auth/email called');
    return await this.appService.signInWithEmail(data.email, data.password);
  }

}
