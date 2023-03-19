import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout } from "../components"
import mockData from "../components/mockWorkoutData";

function Workouts() {
  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        {mockData.map( object => {
          return(
            <Workout key={object.id} {...object} />
          )
        })}
        
        
    </WorkoutsStyled>
  )
}

export default Workouts