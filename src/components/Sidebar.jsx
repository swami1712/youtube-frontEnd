import React from "react";
import "./../Sidebar.css";
import Home from "@mui/icons-material/Home";
import Subscriptions from "@mui/icons-material/Subscriptions";
import { Avatar } from "@mui/material";
import SidebarRow from "./SidebarRow";
import ArrowDropDown from "@mui/icons-material/KeyboardArrowDown";

const Sidebar = (props) => {
  return (
    <div className={`Sidebar ${props.isOpen ? "active" : ""} `}>
      <div className="Sidebar__right">
        <SidebarRow title="Home" Icon={Home} />
        <SidebarRow title="Subscriptions" Icon={Subscriptions} />
        <SidebarRow title="Home" Icon={Home} />
        <hr />
        <SidebarRow title="Home" Icon={Home} />
        <SidebarRow title="Home" Icon={Home} />
        <SidebarRow title="Subscriptions" Icon={Subscriptions} />
        <SidebarRow title="Home" Icon={Home} />
        <hr />
        <h2 className="SidebarRow__titleoftitle">Subscriptions</h2>
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Tanay Pratap" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Show more" Icon={ArrowDropDown} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Tanay Pratap" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Show more" Icon={ArrowDropDown} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Tanay Pratap" Icon={Avatar} />
        <SidebarRow title="Home" Icon={Avatar} />
        <SidebarRow title="Show more" Icon={ArrowDropDown} />
      </div>
    </div>
  );
};

export default Sidebar;
