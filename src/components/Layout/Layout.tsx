import React from "react";
import GlobalStyle from "../../style/globalStyle";
import Navbar  from "../Navbar/Navbar";

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <GlobalStyle/>
    </>
  );
}
