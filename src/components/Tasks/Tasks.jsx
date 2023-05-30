import React from "react"

import Task from "./Task"
import classes from "./Tasks.module.css"

const Tasks = () => {
  return (
    <main className={classes.tasks}>
      <section>
        <h3>TODO</h3>
        <Task />
        <Task />
      </section>
      <section>
        <h3>DOING</h3>
        <Task />
        <Task />
        <Task />
        <Task />
      </section>
      <section>
        <h3>DONE</h3>
        <Task />
      </section>
    </main>
  )
}

export default Tasks
