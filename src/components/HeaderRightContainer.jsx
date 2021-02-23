import React from "react";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import "./HeaderRightContainer.css";

function HeaderRightContainer() {
  return (
    <div className="header__rightContainer">
      <div>
        <VideoCallIcon className="header__rightIcon" />
        <AppsIcon className="header__rightIcon" />
        <NotificationsIcon className="header__rightIcon" />
      </div>
      <div>
        <img
          className="header__avatar"
          src="https://yt3.ggpht.com/yti/ANoDKi64Hz6inMrSfT4-5i-1RhenVncpI4gmKETyt9W-1Q=s108-c-k-c0x00ffffff-no-rj"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default HeaderRightContainer;
