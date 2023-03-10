import { Injectable } from '@nestjs/common';
import { InjectCluster } from '@liaoliaots/nestjs-redis';
import { Cluster } from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectCluster() private readonly cluster: Cluster) {}

  async ping(): Promise<string> {
    return await this.cluster.ping();
  }

  async get(key: KeyType) {
    return this.cluster.get(key);
  }

  async set(key: KeyType, value: string | number | Buffer) {
    return this.cluster.set(key, value);
  }

  async del(key: KeyType) {
    return this.cluster.del(key);
  }
}
