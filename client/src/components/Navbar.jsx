import { NavStyled } from "./styles/Navbar.styles"
import logoImg from "../assets/images/logo.png"

function Navbar() {
  return (
    <NavStyled>
        <ul>
            <li id="nav-logo"><a href="#" ><img src={logoImg}/> <h1>WorkoutLog</h1></a></li>
            <div>
                <li><a href="#">Exercises</a></li>
                <li><a href="#">Your Exercises</a></li>
                <li><a href="#">Your Workouts</a></li>
            </div>
            <li><button>Log out</button></li>
        </ul>
        
        
        

    </NavStyled>
    
  )
}

export default Navbar