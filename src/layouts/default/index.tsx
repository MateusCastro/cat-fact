import React from "react";

import { Header, Wrapper, Footer } from "./styles";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header>
        <h1>Cat Fact</h1>
      </Header>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <p>developed by Mateus Domingos © 2020</p>
      </Footer>
    </>
  );
};

export default DefaultLayout;
