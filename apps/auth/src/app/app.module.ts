import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { EnvModule } from '@samoject/env';
import { HealthModule } from '@samoject/health';
import { SecurityConfig } from '@samoject/core';
import { GqlAuthGuard } from './gql-auth.guard';
import { SupabaseModule, SupabaseStrategy } from '@samoject/supabase';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    HealthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_ACCESS_SECRET');
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: secret,
          signOptions: {
            expiresIn: securityConfig.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
    SupabaseModule,
  ],
  providers: [
    {
      provide: 'USER_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({ transport: Transport.NATS });
      },
      inject: [ConfigService],
    },
    AppService,
    AppResolver,
    SupabaseStrategy,
    GqlAuthGuard,
  ],
  exports: [GqlAuthGuard],
})
export class AppModule { }
