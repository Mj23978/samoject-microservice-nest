import { Body, Controller, Post, Res, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaClientExceptionFilter } from '@samoject/core';
import { AuthEvent, LoginInput, SignupInput } from '@samoject/interface';
import { AuthApiError } from '@supabase/supabase-js';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  // private readonly logger = new Logger(AppController.name);

  @Post('signup')
  @UseFilters(PrismaClientExceptionFilter)
  @MessagePattern({ cmd: AuthEvent.SIGN_UP })
  async signup(@Body() data: SignupInput, @Res() res: Response) {
    // this.logger.log('GET /auth/email called');
    const result = await this.appService.signup(data);
    if (result instanceof AuthApiError) {
      return res.status(result.status).json(result);
    }
    return result
  }

  @Post('email')
  @UseFilters(PrismaClientExceptionFilter)
  @MessagePattern({ cmd: AuthEvent.SIGN_IN_WITH_EMAIL })
  async authEmail(@Body() data: LoginInput) {
    // this.logger.log('GET /auth/email called');
    return await this.appService.signInWithEmail(data.email, data.password);
  }

  // @Get('sum')
  // sum(@Query('digits') digits) {
  //   const data = digits.split(',').map(Number);
  //   return this.appService
  //     .sum(data)
  //     .pipe(tap(result => this.logger.log('AuthController: sum result', result)));
  // }

}
