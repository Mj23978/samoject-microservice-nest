import { Module } from '@nestjs/common';
import { EnvModule } from '@samoject/env';
import { HealthModule } from '@samoject/health';
import { PrismaModule } from '@samoject/prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    HealthModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
