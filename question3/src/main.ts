import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'protos',
        protoPath: join(__dirname, 'protos/population.proto'),
      },
    },
  );
  app.listen(() => console.log('Population Microservice is Listening'));
}
bootstrap();
