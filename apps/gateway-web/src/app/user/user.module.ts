import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { natsConfig } from '@samoject/core';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'USER_SERVICE',
      ...natsConfig,
    }]),
    // ClientsModule.registerAsync([
    //   {
    //     name: 'USER_SERVICE',
    //     useFactory: (config: ConfigService) => ({
    //       transport: Transport.KAFKA,
    //       options: {
    //         client: {
    //           clientId: 'gateway-web',
    //           brokers: [config.get('KAFKA_URL')],
    //         },
    //         consumer: {
    //           groupId: 'user-consumer',
    //           allowAutoTopicCreation: true,
    //         },
    //       },
    //     }),
    //     inject: [ConfigService],
    //   },
    // ]),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
