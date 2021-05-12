import { Controller, Get, Param } from '@nestjs/common';
import AppService from './app.service';
import IPopulation from './interfaces/population.interface';
import State from './models/state.model';

@Controller()
export default class AppController {
  constructor(private appService: AppService) {}

  //question 1
  @Get('states')
  getStates(): { states: State[] } {
    return { states: this.appService.getStates() };
  }

  //question 2
  @Get('population/:abbreviation')
  getPopulationByState(@Param() params): IPopulation {
    return this.appService.gePopulationByState(params.abbreviation);
  }

  //question 3 by RPC
  @Get('states_rpc')
  async getPopulationByState_RPC() {
    const statesRPC = [];
    for (const state of this.appService.getStates()) {
      const population = await this.appService
        .gePopulationByState_RPC({
          abbreviation: state.abbreviation,
        })
        .toPromise();

      statesRPC.push({
        ...state,
        population: population.population,
      });
    }

    return { states: statesRPC };
  }
}
