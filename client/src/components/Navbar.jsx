import { NavStyled } from "./styles/Navbar.styles"
import logoImg from "../assets/images/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/login")
  }

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
            <li><button onClick={handleLogout}>Log out</button></li>
        </ul>
    </NavStyled>
    
  )
}

export default Navbar