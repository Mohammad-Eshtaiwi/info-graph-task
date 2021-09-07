import React from "react";
import HeaderInfo from "./HeaderInfo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <HeaderInfo />
      <div className="container">
        <Nav />
      </div>
    </header>
  );
}
