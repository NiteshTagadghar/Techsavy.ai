// src/components/Sidebar.js
import React from "react";
import "./SideMenu.module.css";
import styles from "./SideMenu.module.css";

const Sidebar = () => {

  return (
    <div className={styles.Sidebar}>
        <br></br>
      <button className={styles.sidebarItem}>📊 Performance</button>
    </div>
  );
};

export default Sidebar;
