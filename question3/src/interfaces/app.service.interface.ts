import { Observable } from 'rxjs';
import IPopulation from './population.interface';
import IPopulationByState from './population.state.interface';

export default interface IAppService {
  gePopulationByState_RPC(data: IPopulationByState): IPopulation;
}
