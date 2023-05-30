import React from "react"

import classes from "./Boards.module.css"

const Boards = () => {
  // Placeholders
  const allBoards = 8
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]

  return (
    <div className={classes.boards}>
      <h5>All Boards ({allBoards})</h5>
      <ul className={classes.board}>
        {boards.map((board) => (
          <li className={classes["board--item"]}>
            <i className="bx bx-book-content"></i>
            <p>{board}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Boards
