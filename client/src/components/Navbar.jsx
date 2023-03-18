import { NavStyled } from "./styles/Navbar.styles"
import logoImg from "../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom"

function Navbar() {

  // <li><a href="/exercises">Exercises</a></li>
  //               <li><a href="/yourexercises">Your Exercises</a></li>
  //               <li><a href="/workouts">Your Workouts</a></li>
  return (
    <NavStyled>
        <ul>
            <li id="nav-logo"><Link to="/" ><img src={logoImg}/> <h1>WorkoutLog</h1></Link></li>
            <div>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/savedexercises">Saved Exercises</NavLink></li>
                <li><NavLink to="/workouts">Workouts</NavLink></li>
                <li><NavLink to="/workoutlogs">Workout Logs</NavLink></li>
            </div>
            <li><button>Log out</button></li>
        </ul>
        
        
        

    </NavStyled>
    
  )
}

export default Navbar