import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'protos',
        transport: Transport.GRPC,
        options: {
          package: 'protos',
          protoPath: join(__dirname, 'protos/population.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
