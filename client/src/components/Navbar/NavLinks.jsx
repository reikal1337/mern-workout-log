import React from 'react'
import { NavLink } from "react-router-dom"

function NavLinks() {
  return (
      <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/exercises">Exercises</NavLink></li>
        <li><NavLink to="/savedexercises">Saved Exercises</NavLink></li>
        <li><NavLink to="/workouts">Workouts</NavLink></li>
        <li><NavLink to="/workoutlogs">Workout Logs</NavLink></li>
      </>    
  )
}

export default NavLinks