import { action } from 'typesafe-actions';

import { CatFactActionsTypes } from './types';
import { CatFact } from '../../../common/types';

export const loadRequest = () => action(CatFactActionsTypes.LOAD_REQUEST);
export const loadSuccess = (data: CatFact[]) =>
  action(CatFactActionsTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(CatFactActionsTypes.LOAD_FAILURE);
