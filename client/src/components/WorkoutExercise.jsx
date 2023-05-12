import { StyledWorkoutExercise } from "./styles/WorkoutExercise.style"
import { formatBodyParts } from "../helpers/util"

function WorkoutExercise(props) {
  return (
    <StyledWorkoutExercise>
      <h4>{props.name}</h4>
      {/* <h6>{formatBodyParts(props.bodyParts)}</h6> */}
      
      <div>
        <span>Sets: {props.sets}</span>
        <span>Reps: {props.reps}</span>
      </div>
      

    </StyledWorkoutExercise>
  )
}

export default WorkoutExercise