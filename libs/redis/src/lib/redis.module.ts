import { ClusterModule,  } from '@liaoliaots/nestjs-redis';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisConfig } from '@samoject/core';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [
    ClusterModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const redisConfig = configService.get<RedisConfig>('redis');
        return {
          readyLog: true,
          config: {
            nodes: [
              {
                host: '0.0.0.0',
                port: 6379,
              },
            ],
            options: {
              clusterRetryStrategy: (times: number) =>
                Math.min(100 + times * 2, 2000),
              enableReadyCheck: true,
              slotsRefreshTimeout: 2000,
              scaleReads: 'slave',
            },
          },
        };
      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule { }
