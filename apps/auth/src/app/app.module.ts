import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { EnvModule } from '@samoject/env';
import { HealthModule } from '@samoject/health';
import { config, SecurityConfig } from '@samoject/core';
import { GqlAuthGuard } from './gql-auth.guard';
import { SupabaseModule, SupabaseStrategy } from '@samoject/supabase';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';

@Module({
  imports: [
    EnvModule,
    HealthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const securityConfig = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_ACCESS_SECRET'),
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
