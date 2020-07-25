import React from "react";

import CatFactList from "../../components/CatFactList";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <CatFactList />
    </Container>
  );
};

export default Home;
