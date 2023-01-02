import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { config, GatewayConfig, SecurityConfig } from '@samoject/core';
import { PubsubModule } from '@samoject/redis';
import { SupabaseModule, SupabaseStrategy } from '@samoject/supabase';
import { AuthModule } from './auth/auth.module';
import { GqlAuthGuard } from './gql-auth.guard';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
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
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (configService: ConfigService) => {
        const gatewayConfig = configService.get<GatewayConfig>('gateway');
        return {
          autoSchemaFile: true,
          debug: !gatewayConfig.production,
          playground: !gatewayConfig.production,
          introspection: !gatewayConfig.production,
          installSubscriptionHandlers: true,
          subscriptions: {
            'graphql-ws': true
          },
          plugins: [],
          buildSchemaOptions: {
            dateScalarMode: 'timestamp',
            numberScalarMode: 'integer',
          },
        };
      },
      inject: [ConfigService],
    }),
    PubsubModule,
    UserModule,
    TaskModule,
    AuthModule,
    SupabaseModule,
  ],
  providers: [
    SupabaseStrategy,
    GqlAuthGuard,
  ],
  exports: [GqlAuthGuard],

})
export class AppModule { }
