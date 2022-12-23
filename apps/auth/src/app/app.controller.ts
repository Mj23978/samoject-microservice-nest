import { Controller, Logger, Body, Post, Res, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthApiError } from '@supabase/supabase-js';
import { LoginInput, SignupInput } from '../dto';
import { FastifyReply } from 'fastify';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CreateUserInput } from '@samoject/interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private readonly logger = new Logger(AppController.name);

  @Post('signup')
  async signup(@Body() data: SignupInput) {
    this.logger.log('GET /auth/email called');
    const result = await this.appService.signup(data.email, data.password, data.username, data.firstname, data.lastname);
    // if (result instanceof AuthApiError) {
    //   return res.status(result.status).send(result);
    // }
    if (result instanceof Observable<CreateUserInput>) {
      return result.pipe(tap(result => this.logger.log('AuthController: signup result', result)));
    }
    return result
  }

  @Post('email')
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
