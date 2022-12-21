import { ClusterModule } from '@liaoliaots/nestjs-redis';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from '@samoject/env';
import { RedisService } from './redis.service';

@Global()
@Module({
  imports: [
    ClusterModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService<EnvironmentVariables>) => ({
        readyLog: true,
        config: {
          nodes: [
            {
              host: config.get('redisHost'),
              port: config.get('redisPort'),
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
      }),
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule { }
