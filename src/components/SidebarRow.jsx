import React from "react";
import "./Sidebar.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebar__row">
      <Icon className="sidebar__icons" />
      <p className="sidebar__title">{title}</p>
    </div>
  );
}

export default SidebarRow;
