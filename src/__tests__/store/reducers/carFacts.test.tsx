import reducer, { INITIAL_STATE } from '../../../store/modules/catFacts';
import * as CatFactsActions from '../../../store/modules/catFacts/actions';
import { CatFact } from '../../../common/types';

describe('CatFacts reducer', () => {
  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, CatFactsActions.loadRequest());

    expect(state).toStrictEqual({ ...INITIAL_STATE, loading: true });
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, CatFactsActions.loadFailure());

    expect(state).toStrictEqual({ ...INITIAL_STATE, error: true });
  });

  it('LOAD_SUCCESS', () => {
    const dataCatFact: CatFact[] = [
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
    ];

    const state = reducer(
      INITIAL_STATE,
      CatFactsActions.loadSuccess(dataCatFact),
    );

    expect(state).toStrictEqual({ ...INITIAL_STATE, data: dataCatFact });
  });

  it('load default', () => {
    const action = {
      type: 'default case default',
    };

    const state = reducer(undefined, action);
    expect(state).toStrictEqual({ ...INITIAL_STATE });
  });
});
