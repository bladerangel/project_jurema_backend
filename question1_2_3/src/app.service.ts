import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import IAppService from './interfaces/app.service.interface';
import IPopulation from './interfaces/population.interface';
import IPopulationByState from './interfaces/population.state.interface';
import Population from './models/population.model';
import State from './models/state.model';

@Injectable()
export default class AppService implements OnModuleInit {
  private appService: IAppService;

  constructor(@Inject('protos') private client: ClientGrpc) {}

  onModuleInit() {
    this.appService = this.client.getService<IAppService>('AppService');
  }

  private populations: Population[] = [
    new Population(new State('São Paulo', 'SP'), 12.33),
    new Population(new State('Rio de Janeiro', 'RJ'), 6.7),
    new Population(new State('Pernambuco', 'PE'), 9.2),
    new Population(new State('Bahia', 'BA'), 15.13),
  ];

  getStates(): State[] {
    return this.populations.map((population) => population.state);
  }

  gePopulationByState(abbreviation: string): IPopulation {
    const population = this.populations.find(
      (population) =>
        population.state.abbreviation == abbreviation.toLocaleUpperCase(),
    );

    return {
      abbreviation: population.state.abbreviation,
      population: population.quantity,
    };
  }

  gePopulationByState_RPC(
    populationByState: IPopulationByState,
  ): Observable<IPopulation> {
    return this.appService.gePopulationByState_RPC(populationByState);
  }
}
