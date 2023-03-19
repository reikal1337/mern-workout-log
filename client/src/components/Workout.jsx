import { SimpleButtonBlue, SimpleButtonRed } from "./styles/Buttons.syles"
import { WorkoutStyled } from "./styles/Workout.styles"

function Workout(props) {

  function returnFullExercises(data) {
    return data.map( object => {
     return (
      <div className="workout-content">
        <h4>{object.name}</h4>
        <h6 >{object.bodyParts}</h6>
        {object.sets.map( object => {

          return(
          <div >
            <span>Set: {object.set}</span>
            <span>Reps: {object.reps}</span>
            <span>Weight: {object.weight}kg</span>
          </div>
          )
        })}

      </div>
     )
    })

  }

  return (
    <WorkoutStyled>
      <h3>{props.name}</h3>
      {returnFullExercises(props.exercises)}
    </WorkoutStyled>
  )
}

export default Workout