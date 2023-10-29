import React from "react";

const SidebarRow = (props) => {
  //   const Icon = props.icon;
  return (
    <div>
      <div className="SidebarRow">
        <props.Icon className="Sidebar__icons" />
        <p className="SidebarRow__title">{props.title}</p>
      </div>
    </div>
  );
};

export default SidebarRow;
