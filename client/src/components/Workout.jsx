import { useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "./styles/Buttons.syles"
import { WorkoutStyled } from "./styles/Workout.styles"
import { BiDownArrow } from "react-icons/bi"

function Workout(props) {
  const [collapsedIndex,setCollapsedIndex] = useState("")

  function handleClick(id) {
    setCollapsedIndex( prevState => 
      prevState === id ? prevState = "" : prevState = id)
  }

  function returnFullExercises(data) {
    return data.map( object => {
     return (
      <div className={"exercise-content"}>
        <h4>{object.exerciseName}</h4>
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
      <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
      </div>
      <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}>
        {returnFullExercises(props.exercises)}
        <div className="button-container">
          <SimpleButtonBlue>Edit</SimpleButtonBlue>
          <SimpleButtonRed>Delete</SimpleButtonRed>
        </div>
      </div>
      
    </WorkoutStyled>
  )
}

export default Workout