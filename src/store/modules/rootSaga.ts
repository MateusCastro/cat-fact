import { all, takeLatest } from 'redux-saga/effects';

import { CatFactActionsTypes } from './catFacts/types';
import { load } from './catFacts/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(CatFactActionsTypes.LOAD_REQUEST, load)]);
}
