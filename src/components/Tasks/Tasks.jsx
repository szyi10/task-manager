import React from "react"

import Task from "./Task"
import classes from "./Tasks.module.css"

const Tasks = () => {
  // Placeholders
  const todo = [
    {
      title: "Build UI for onboarding flow",
      subtasks: 3,
      progress: 0,
    },
    {
      title: "Build UI for search",
      subtasks: 1,
      progress: 0,
    },
    {
      title: "Build settings UI",
      subtasks: 2,
      progress: 0,
    },
    {
      title: "QA and test all major user journeys",
      subtasks: 2,
      progress: 0,
    },
  ]
  const doing = [
    {
      title: "Design settings and search pages",
      subtasks: 3,
      progress: 1,
    },
    {
      title: "Add account management endpoints",
      subtasks: 3,
      progress: 2,
    },
    {
      title: "Design onboarding flow",
      subtasks: 3,
      progress: 1,
    },
    {
      title: "Add search endpoints",
      subtasks: 2,
      progress: 1,
    },
    {
      title: "Add authentication endpoints",
      subtasks: 2,
      progress: 1,
    },
    {
      title:
        "Research pricing points of various competitors and trial different business models",
      subtasks: 3,
      progress: 1,
    },
  ]
  const done = [
    {
      title: "Conduct 5 wireframe tests",
      subtasks: 1,
      progress: 1,
    },
    {
      title: "Create wireframe prototype",
      subtasks: 1,
      progress: 1,
    },
    {
      title: "Review results of usability tests and iterate",
      subtasks: 3,
      progress: 3,
    },
    {
      title:
        "Create paper prototypes and conduct 10 usability test with potential customers",
      subtasks: 2,
      progress: 2,
    },
    {
      title: "Market discovery",
      subtasks: 1,
      progress: 1,
    },
    {
      title: "Competitor analysis",
      subtasks: 2,
      progress: 2,
    },
    {
      title: "Research the market",
      subtasks: 2,
      progress: 2,
    },
  ]

  return (
    <main className={classes.tasks}>
      <section className={classes.category}>
        <div className={classes.label}>
          <span className={classes.todo}></span>
          <p>Todo ({todo.length})</p>
        </div>
        {todo.map((task) => (
          <Task data={task} />
        ))}
      </section>
      <section className={classes.category}>
        <div className={classes.label}>
          <span className={classes.doing}></span>
          <p>Doing ({doing.length})</p>
        </div>
        {doing.map((task) => (
          <Task data={task} />
        ))}
      </section>
      <section className={classes.category}>
        <div className={classes.label}>
          <span className={classes.done}></span>
          <p>Done ({done.length})</p>
        </div>
        {done.map((task) => (
          <Task data={task} />
        ))}
      </section>
    </main>
  )
}

export default Tasks
