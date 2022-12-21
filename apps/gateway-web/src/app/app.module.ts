import {
  EnvironmentVariables,
  EnvModule
} from '@samoject/env';
import { HealthModule } from '@samoject/health';
import { MongoModule } from '@samoject/mongo';
// import { kafkaClientConfig } from '@samoject/kafka';
// import { RedisModule } from '@samoject/redis';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HealthModule,
    EnvModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (config: ConfigService<EnvironmentVariables>) => ({
        autoSchemaFile: true,
        debug: !config.get('isProduction'),
        playground: !config.get('isProduction'),
        introspection: !config.get('isProduction'),
        buildSchemaOptions: {
          dateScalarMode: 'isoDate',
          numberScalarMode: 'integer',
        },
      }),
      inject: [ConfigService],
    }),
    MongoModule,
    // RedisModule,
    UserModule,
  ],
})
export class AppModule { }
