import React from "react";
import HeaderLeftContainer from "./HeaderLeftContainer";
import HeaderSearchConatiner from "./HeaderSearchConatiner";
import HeaderRightContainer from "./HeaderRightContainer";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <HeaderLeftContainer />
      <HeaderSearchConatiner />
      <HeaderRightContainer />
    </header>
  );
}

export default Header;
