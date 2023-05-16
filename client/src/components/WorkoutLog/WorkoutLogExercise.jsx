import { StyledWorkoutLogExerciese } from '../styles/WorkoutLogExercise.styles'
import { SimpleButtonBlue } from '../styles/Buttons.syles'
import WorkoutLogSets from './WorkoutLogSets'
function WorkoutLogExercise(props) {
  const [setsData,setSetsData] = []

  const getSetData = (data) => {
    console.log(data)
    setSetsData({
      ...setsData,
      ...data
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

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
      
      <form onSubmit={handleSubmit}>//
        {
          props.sets.map((object,i) => {
            return <WorkoutLogSets key={object._id} index={i} {...object} />
          })
        }
        <SimpleButtonBlue type="submit"/>
      </form>//
      
    </StyledWorkoutLogExerciese>
  )
}

export default WorkoutLogExercise