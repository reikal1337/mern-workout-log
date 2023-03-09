import { Navbar } from "../components"
import { SectionStyled } from "./styles"
import workoutImage from "../assets/images/workout2.jpg"


function Home() {
  return (
    <>
      <Navbar/>
      <SectionStyled>
        <ul>
          <li>Create your own workouts</li>
          <li>Create and share your exerciseses</li>
          <li>Track your progress</li>
        </ul>
        <img src={workoutImage} alt="A man in a boxing ring" />
        
        
      </SectionStyled>
    </>
    
  )
}

export default Home