import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { PassportModule } from '@nestjs/passport';
import { config, natsConfig, SecurityConfig } from '@samoject/core';
import { GqlAuthGuard } from './gql-auth.guard';
import { SupabaseModule, SupabaseStrategy } from '@samoject/supabase';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    ClientsModule.register([{
      name: 'MATH_SERVICE',
      ...natsConfig,
    }]),
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
    AppService,
    AppResolver,
    SupabaseStrategy,
    GqlAuthGuard,
  ],
  controllers: [AppController],
  exports: [GqlAuthGuard],
})
export class AppModule { }
