import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../style/globalStyle";
import Navbar from "../Navbar/Navbar";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Container>
        <Navbar />
        {children}
      </Container>
      <GlobalStyle />
    </>
  );
}

const Container = styled.div`
  max-width: 1650px;
  margin: auto;
`;
