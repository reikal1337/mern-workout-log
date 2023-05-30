import { ExercisesStyled } from "./styles"
import { Navbar, Footer } from "../components"
function NotFound() {
  return (
    <>
    <Navbar />
    <ExercisesStyled>
        <h1>404 Not Found</h1>
    </ExercisesStyled>
    <Footer />
    </>
  )
}

export default NotFound