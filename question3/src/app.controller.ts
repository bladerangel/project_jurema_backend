import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import AppService from './app.service';
import IPopulation from './interfaces/population.interface';
import IPopulationByState from './interfaces/population.state.interface';

@Controller()
export default class AppController {
  constructor(private appService: AppService) {}

  @GrpcMethod('AppService', 'GePopulationByState_RPC')
  gePopulationByState_RPC(data: IPopulationByState): IPopulation {
    return this.appService.gePopulationByState(data.abbreviation);
  }
}
