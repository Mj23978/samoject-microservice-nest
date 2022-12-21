import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const config = app.get(ConfigService);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.KAFKA,
  //   options: {
  //     client: {
  //       brokers: [config.get('KAFKA_URL')],
  //       sasl: {
  //         username: config.get('KAFKA_API_KEY'),
  //         password: config.get('KAFKA_API_SECRET'),
  //         mechanism: 'plain'
  //       },
  //       ssl: true
  //     },
  //     consumer: {
  //       groupId: 'user-consumer',
  //       allowAutoTopicCreation: true,
  //     },
  //   },
  // });


  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: [config.get('NATS_URL')],
    }
  },
  );


  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = config.get('PORT') || 5001;

  await app.startAllMicroservices();
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
