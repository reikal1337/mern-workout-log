import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout } from "../components"

function Workouts() {
  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        <Workout />
        
    </WorkoutsStyled>
  )
}

export default Workouts