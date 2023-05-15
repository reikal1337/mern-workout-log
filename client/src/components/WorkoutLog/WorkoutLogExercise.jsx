import { StyledWorkoutLogExerciese } from '../styles/WorkoutLogExercise.styles'
import WorkoutLogSets from './WorkoutLogSets'
function WorkoutLogExercise(props) {
  return (
    <StyledWorkoutLogExerciese>
        <div className="index-exit-container">
        <p>{`${props.index+1}.`}</p>
        {/* {
        props.editMode &&
          <SimpleButtonRed onClick={() => props.onRemove(props.index)} className="workout-button-exercise-remove"><AiOutlineClose/></SimpleButtonRed>
          } */}
      </div>
      
      <h4>{props.name}</h4>
      <h6>{props.bodyParts}</h6>
      
      <div>
        {
          props.sets.map((object,i) => {
            return <WorkoutLogSets key={object._id} index={i} {...object} />
          })
        }
      </div>
    </StyledWorkoutLogExerciese>
  )
}

export default WorkoutLogExercise