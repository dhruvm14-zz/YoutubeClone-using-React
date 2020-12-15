import React from "react";
import "./css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/YouTube_social_white_squircle_%282017%29.svg/1200px-YouTube_social_white_squircle_%282017%29.svg.png"
        />
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <MoreVertIcon className="header__icon"/>
        <img
          className="header__avatar"
          src="https://avatars.githubusercontent.com/dhruvm14.png"
        />
      </div>
    </div>
  );
}

export default Header;
