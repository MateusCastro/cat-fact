import { CatFact } from '../../../common/types';

export enum CatFactActionsTypes {
  LOAD_REQUEST = '@catFacts/LOAD_REQUEST',
  LOAD_SUCCESS = '@catFacts/LOAD_SUCCESS',
  LOAD_FAILURE = '@catFacts/LOAD_FAILURE',
}

export interface CatFactState {
  readonly data: CatFact[];
  readonly loading: boolean;
  readonly error: boolean;
}
