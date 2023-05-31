import React from "react"

import classes from "./Boards.module.css"

const Boards = () => {
  // Placeholders
  const allBoards = 8
  const boards = ["Platform Launch", "Marketing Plan", "Roadmap"]
  const activeBoard = 0

  return (
    <div className={classes.boards}>
      <h5>All Boards ({allBoards})</h5>
      <ul className={classes.board}>
        {boards.map((board, index) => (
          <li
            key={index}
            className={`${classes["board--item"]} ${
              index === activeBoard && classes.active
            }`}
          >
            <i className="bx bx-book-content"></i>
            <p>{board}</p>
          </li>
        ))}
        <li className={classes["board--item-new"]}>
          <i className="bx bx-book-content"></i>
          <p>+Create New Board</p>
        </li>
      </ul>
    </div>
  )
}

export default Boards
