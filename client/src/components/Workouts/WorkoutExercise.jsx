import { StyledWorkoutExercise } from "../styles/WorkoutExercise.style"
import { AiOutlineClose } from "react-icons/ai"
import { SimpleButtonRed } from "../styles/Buttons.syles"

function WorkoutExercise(props) {
  return (
    <StyledWorkoutExercise>
      <div className="index-exit-container">
        <p>{`${props.index+1}.`}</p>
        {
        props.editMode &&
          <SimpleButtonRed onClick={() => props.onRemove(props.index)} className="workout-button-exercise-remove"><AiOutlineClose/></SimpleButtonRed>
        }
      </div>
      
      <h4>{props.name}</h4>
      <h6>{props.bodyParts}</h6>
      
      <div>
        <span>Sets: {props.sets}</span>
        <span>Reps: {props.reps}</span>
      </div>
    </StyledWorkoutExercise>
  )
}

export default WorkoutExercise