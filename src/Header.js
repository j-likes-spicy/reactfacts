import React from "react";
import logo from "./logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo_container">
        <img src={logo} className="logo" />
        <h1 className="logo_text">ReactFacts</h1>
      </div>
      <p className="header_text">React Course - Project 1</p>
    </header>
  );
};
