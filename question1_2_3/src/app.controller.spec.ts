import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { join } from 'path';
import AppController from './app.controller';
import AppService from './app.service';
import State from './models/state.model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
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
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('states', () => {
    it('should return states', () => {
      const states = [
        new State('São Paulo', 'SP'),
        new State('Rio de Janeiro', 'RJ'),
        new State('Pernambuco', 'PE'),
        new State('Bahia', 'BA'),
      ];
      expect(appController.getStates()).toEqual({ states });
    });
  });

  describe('population', () => {
    it('should return population from SP', () => {
      const populationByState = { abbreviation: 'SP', population: 12.33 };
      expect(
        appController.getPopulationByState({ abbreviation: 'SP' }),
      ).toEqual(populationByState);
    });
  });
});
