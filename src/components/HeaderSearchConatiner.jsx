import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./HeaderSearchContainer.css";

function HeaderSearchConatiner() {
  return (
    <div class="header__input">
      <div className="header__searchInput">
        <input type="text" placeholder="  Search" />
      </div>
      <SearchIcon className="header__searchIcon" />
    </div>
  );
}

export default HeaderSearchConatiner;
