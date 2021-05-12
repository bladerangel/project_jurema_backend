import { Injectable } from '@nestjs/common';
import IPopulation from './interfaces/population.interface';
import Population from './models/population.model';
import State from './models/state.model';

@Injectable()
export default class AppService {
  private populations: Population[] = [
    new Population(new State('São Paulo', 'SP'), 12.33),
    new Population(new State('Rio de Janeiro', 'RJ'), 6.7),
    new Population(new State('Pernambuco', 'PE'), 9.2),
    new Population(new State('Bahia', 'BA'), 15.13),
  ];

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
}
