import React from "react";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};
