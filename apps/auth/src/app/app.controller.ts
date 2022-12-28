import { Controller, Logger, Body, Post, Res, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthApiError } from '@supabase/supabase-js';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthEvent, CreateUserInput, LoginInput, SignupInput } from '@samoject/interface';
import { Response } from 'express';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private readonly logger = new Logger(AppController.name);

  @Post('signup')
  @MessagePattern({ cmd: AuthEvent.SIGN_UP })
  async signup(@Body() data: SignupInput, @Res() res: Response) {
    this.logger.log('GET /auth/email called');
    const result = await this.appService.signup(data);
    if (result instanceof AuthApiError) {
      return res.status(result.status).json(result);
    }
    if (result instanceof Observable<CreateUserInput>) {
      return result.pipe(tap(result => this.logger.log('AuthController: signup result', result)));
    }
    return result
  }
  
  @Post('email')
  @MessagePattern({ cmd: AuthEvent.SIGN_IN_WITH_EMAIL })
  async authEmail(@Body() data: LoginInput) {
    this.logger.log('GET /auth/email called');
    return await this.appService.signInWithEmail(data.email, data.password);
  }

  @Get('sum')
  sum(@Query('digits') digits) {
    const data = digits.split(',').map(Number);
    return this.appService
      .sum(data)
      .pipe(tap(result => this.logger.log('AuthController: sum result', result)));
  }

}
