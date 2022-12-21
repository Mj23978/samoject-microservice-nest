import { Controller, Logger, Body, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthApiError } from '@supabase/supabase-js';
import { LoginInput, SignupInput } from '../dto';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private readonly logger = new Logger(AppController.name);

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
