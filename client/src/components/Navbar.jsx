import { NavStyled } from "./styles/Navbar.styles"
import { LogOutButton, LogInButton } from "./styles/Buttons.syles"
import logoImg from "../assets/images/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"


function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const handleLogOut = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <NavStyled>
        <ul>
            <li id="nav-logo"><Link to="/" ><img src={logoImg}/> <h1>WorkoutLog</h1></Link></li>
            <div>
              {user ?
                <>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/savedexercises">Saved Exercises</NavLink></li>
                <li><NavLink to="/workouts">Workouts</NavLink></li>
                <li><NavLink to="/workoutlogs">Workout Logs</NavLink></li>
                </>
                : ""
                }
            </div>
              {user ?
                <li><LogOutButton onClick={handleLogOut}>Log out</LogOutButton></li>
                :
                <>
                <li><LogInButton onClick={() => navigate("/register")}>Register</LogInButton></li> 
                <li><LogInButton onClick={() => navigate("/login")}>Log in</LogInButton></li>  
                </>
              }
            
        </ul>
    </NavStyled>
    
  )
}

export default Navbar