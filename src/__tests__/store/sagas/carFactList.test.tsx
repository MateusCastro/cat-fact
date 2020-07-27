import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../services/api';
import * as CatFactsActions from '../../../store/modules/catFacts/actions';
import { load } from '../../../store/modules/catFacts/sagas';
import { CatFact } from '../../../common/types';

interface ResponseCatFact {
  all: CatFact[];
}

const apiMock = new MockAdapter(api);

describe('CatFacts saga', () => {
  it('should be able to fetch CarFacts', async () => {
    const dispatch = jest.fn();

    const responseCatFact: ResponseCatFact = {
      all: [
        {
          _id: 'asdf23s2d1f',
          type: 'cat',
          text: 'gato loves grace',
          upvotes: 8,
          user: null,
        },
        {
          _id: '96512312sf',
          type: 'cat',
          text: 'Cats sleep 70% of their lives.',
          upvotes: 7,
          user: {
            _id: '3155sdf',
            name: {
              first: 'Mateus',
              last: 'Domingos',
            },
          },
        },
      ],
    };

    apiMock.onGet('facts').reply(200, responseCatFact);

    await runSaga({ dispatch }, load).toPromise();
    expect(dispatch).toHaveBeenCalledWith(
      CatFactsActions.loadSuccess(responseCatFact.all),
    );
  });
});

describe('CatFacts saga', () => {
  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('facts').reply(500);

    await runSaga({ dispatch }, load).toPromise();
    expect(dispatch).toHaveBeenCalledWith(CatFactsActions.loadFailure());
  });
});
