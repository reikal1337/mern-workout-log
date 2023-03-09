import { FooterStyled } from "./styles/Footer.style"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <FooterStyled>
        <p>Copyright &copy; 2022-{(new Date().getFullYear())} All Rights Reserved by
        <NavLink to="/"> Reika Developments</NavLink></p>
        {/* Change to personal web */}
    </FooterStyled>
  )
}

export default Footer