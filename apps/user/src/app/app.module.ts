import { Module } from '@nestjs/common';
import { EnvModule } from '@samoject/env';
import { HealthModule } from '@samoject/health';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
