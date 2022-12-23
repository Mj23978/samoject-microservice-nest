import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from '@samoject/core';
import { PrismaModule } from '@samoject/prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
