import { FooterStyled } from "./styles/Footer.style"

function Footer() {
  return (
    <FooterStyled>
        <p>Copyright &copy; 2022-{(new Date().getFullYear())} All Rights Reserved by
        <a href="https://lukasreika.com/" target="_blank" rel="noopener noreferrer"> Reika Developments</a></p>
    </FooterStyled>
  )
}

export default Footer