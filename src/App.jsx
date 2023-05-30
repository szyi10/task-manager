import React from "react"

import Sidebar from "./components/Sidebar/Sidebar"
import Navbar from "./components/Navbar/Navbar"
import Tasks from "./components/Tasks/Tasks"

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="right-side">
        <Navbar />
        <Tasks />
      </div>
    </>
  )
}

export default App
