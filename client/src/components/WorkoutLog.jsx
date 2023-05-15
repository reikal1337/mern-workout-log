import { useState } from 'react'
import { BiDownArrow } from "react-icons/bi"
import { WorkoutLogStyled } from './styles/WorkoutLog.styles'
import WorkoutLogExercise from './WorkoutLogExercise'

function WorkoutLog(props) {
    const [collapsedIndex,setCollapsedIndex] = useState("")


    function handleClick(id) {
        setCollapsedIndex( prevState => 
          prevState === id ? prevState = "" : prevState = id)
    
      }
      console.log(props)
  return (
    <WorkoutLogStyled>
    <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
      </div>
      <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}></div>
      {
        props.exercises.map((object,i) => {
          return <WorkoutLogExercise  key={object._id} index={i} {...object} />
        })
      }

    </WorkoutLogStyled>
  )
}

export default WorkoutLog