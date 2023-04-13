import { SectionStyled } from "./styles"
import workoutImage from "../assets/images/workout2.jpg"
import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Home() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)

  useEffect( () => {
    if(!user){
      navigate("/login")
    }
    
  },[user,navigate])

  


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