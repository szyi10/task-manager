import React from "react"

import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h2>Platform Launch</h2>
      <button>
        <i className="bx bx-plus"></i>
        <p>Add New Task</p>
      </button>
    </nav>
  )
}

export default Navbar
