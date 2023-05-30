import React from "react"

import Boards from "./Boards"
import SideMenu from "./SideMenu"
import classes from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.logo}>
        <h2>Logo</h2>
      </div>
      <Boards />
      <SideMenu />
    </aside>
  )
}

export default Sidebar
