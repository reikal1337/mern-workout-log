import { SectionStyled } from "./styles"
import workoutImage from "../assets/images/workout2.jpg"
import { useCheckIfLogIn } from "../helpers/util"

function Home() {
  useCheckIfLogIn()

  return (
    <>
      <SectionStyled>
        <ul>
          <li>Create your own workouts</li>
          <li>Create and share your exercises</li>
          <li>Track your progress</li>
        </ul>
        <img src={workoutImage} alt="A man in a boxing ring" />
        
        
      </SectionStyled>
    </>
    
  )
}

export default Home