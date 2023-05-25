import { NavStyled } from "../styles/Navbar.styles"
import { LogOutButton, LogInButton } from "../styles/Buttons.syles"
import logoImg from "../../assets/images/logo.png"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import NavLinks from "./NavLinks"
import { NavLinksDeskStyled, NavLinksMobStyled } from "../styles/NavLinks.styles"
import NavMenu from "./NavMenu"
import { useState } from "react"


function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleLogOut = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  const [isOpen,setIsOpne] = useState(false)

  const hameIcon = <GiHamburgerMenu onClick={() => setIsOpne(!isOpen)} id="ham-menu"/>
  const closeIcon = <AiOutlineClose onClick={() => setIsOpne(!isOpen)} id="mobile-close-icon"/>


  return (
    <NavStyled>
        <ul>
            <li id="nav-logo"><Link to="/" ><img src={logoImg}/> <h1>WorkoutLog</h1></Link></li>
            {user ?
              <>
                <NavLinksDeskStyled>
                  <NavLinks />
                </NavLinksDeskStyled>

                <NavLinksMobStyled>
                  {!isOpen ? 
                  hameIcon :
                  closeIcon  
                  }
                  
                  {isOpen && 
                    <div id="mobile-link-container">
                      <NavLinks />
                    </div>
                   }
                </NavLinksMobStyled>

              <li id="profile-nav">
                <NavLink  to={`/profile/${user.username}`}>
                  <FaUserAlt id="navbar-profile-icon"/>
                  <span >{user.username}</span>
                </NavLink>
              </li>
              <li><LogOutButton onClick={handleLogOut}>Log out</LogOutButton></li>
              </>
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