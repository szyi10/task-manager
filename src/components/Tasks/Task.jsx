import React from "react"

import classes from "./Task.module.css"

const Task = ({ data }) => {
  return (
    <article className={classes.task}>
      <h4 className={classes.title}>{data.title}</h4>
      <p className={classes.progress}>
        {data.progress} of {data.subtasks} subtasks
      </p>
    </article>
  )
}

export default Task
