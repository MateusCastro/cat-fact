import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';

import { Table, Loading } from './styles';

import { CatFact } from '../../common/types';
import { loadRequest } from '../../store/modules/catFacts/actions';
import CatFactItem from '../CatFactItem';

const CatFactList: React.FC = () => {
  const dispatch = useDispatch();
  const catFacts = useSelector<ApplicationState, CatFact[]>(
    (state) => state.catFacts.data,
  );
  const loading = useSelector<ApplicationState, boolean>(
    (state) => state.catFacts.loading,
  );

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Table data-testid="carFact-table">
          <thead>
            <tr>
              <th>addded by</th>
              <th>Fact</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {catFacts.map((catFact) => (
              <CatFactItem catFact={catFact} key={catFact._id} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CatFactList;
