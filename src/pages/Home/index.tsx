import React from 'react';

import CatFactList from '../../components/CatFactList';
import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <CatFactList />
  </Container>
);

export default Home;
