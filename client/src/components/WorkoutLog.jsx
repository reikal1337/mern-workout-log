import { useState } from 'react'
import { BiDownArrow } from "react-icons/bi"

function WorkoutLog(props) {
    const [collapsedIndex,setCollapsedIndex] = useState("")


    function handleClick(id) {
        setCollapsedIndex( prevState => 
          prevState === id ? prevState = "" : prevState = id)
    
      }

  return (
    <>
    <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
      </div>
      <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}></div>
    </>
  )
}

export default WorkoutLog