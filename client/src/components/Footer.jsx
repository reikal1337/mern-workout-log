import { FooterStyled } from "./styles/Footer.style"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <FooterStyled>
        <p>Copyright &copy; 2022-{(new Date().getFullYear())} All Rights Reserved by
        <Link to={{ pathname: "https://lukasreika.com/" }} target="_blank"> Reika Developments</Link></p>
    </FooterStyled>
  )
}

export default Footer