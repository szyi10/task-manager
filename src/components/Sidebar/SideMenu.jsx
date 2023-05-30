import React from "react"

import classes from "./SideMenu.module.css"

const SideMenu = () => {
  return (
    <div className={classes.menu}>
      <button>
        <i className="bx bx-moon"></i>
        <p>Dark Mode</p>
      </button>
      <button>
        <i className="bx bx-hide"></i>
        <p>Hide Sidebar</p>
      </button>
    </div>
  )
}

export default SideMenu
