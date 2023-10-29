import React from "react";
import "./../Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = (props) => {
  return (
    <div className="Header__container">
      {/* <h1>this is my header</h1> */}
      {/* <div className="Header__sep"></div> */}
      <div className="Header__left">
        <div className="Header__icons " onClick={props.menuClick}>
          <MenuIcon className="Header__menu" />
        </div>
        <img
          className="yt__logo"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube_Logo"
        />
      </div>

      <div className="Header__middle">
        <div className="Header__middlePart">
          <input type="text" placeholder="Search..." />
          <SearchIcon className=" SearchIcon" />
        </div>

        <div className="MicIcon">
          <MicIcon />
        </div>
      </div>

      <div className="Header__right">
        <div className="Header__icons">
          <VideoCallIcon />
        </div>
        <div className="Header__icons">
          <NotificationsIcon />
        </div>
        <div className="Header__icons">
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
