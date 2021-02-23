import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./HeaderLeftContainer.css";

function HeaderLeftContainer() {
  return (
    <div className="container">
      <MenuIcon className="header__menuIcon" />
      <YouTubeIcon className="header__ytIcon" />
      <h2 class="header__ytTitle">YouTube</h2>
    </div>
  );
}

export default HeaderLeftContainer;
