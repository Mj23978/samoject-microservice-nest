import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { natsConfig } from '@samoject/core';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'AUTH_SERVICE',
      ...natsConfig,
    }]),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
