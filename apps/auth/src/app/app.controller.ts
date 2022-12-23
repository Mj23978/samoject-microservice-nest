import { Controller, Logger, Body, Post, Res, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthApiError } from '@supabase/supabase-js';
import { LoginInput, SignupInput } from '../dto';
import { FastifyReply } from 'fastify';
import { tap } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  private readonly logger = new Logger(AppController.name);

  @Post('signup')
  async signup(@Body() data: SignupInput, @Res() res: FastifyReply) {
    this.logger.log('GET /auth/email called');
    const result = await this.appService.signup(data.email, data.password);
    if (result instanceof AuthApiError) {
      return res.status(result.status).send(result);
    }
    return result;
  }

  @Post('email')
  async authEmail(@Body() data: LoginInput) {
    this.logger.log('GET /auth/email called');
    return await this.appService.signInWithEmail(data.email, data.password);
  }

  @Get('sum')
  sum(@Query('digits') digits) {
    const data = digits.split(',').map(Number);
    this.logger.log('MasterAppController: sum', data);
    return this.appService
      .sum(data)
      .pipe(tap(result => console.log('MasterAppController: sum result', result)));
  }

}
