import { Global, Module } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { RedisConfig } from '@samoject/core';

export const PUB_SUB = 'PUB_SUB';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PUB_SUB,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisConfig = configService.get<RedisConfig>('redis');
        return new RedisPubSub({
          connection: {
            host: redisConfig.host,
            port: redisConfig.port,
          },
        });
      }
    },
  ],
  exports: [PUB_SUB],
})
export class PubsubModule { }


export enum SUBSCRIPTION_EVENTS {
  newPerson = 'newPerson',
}
