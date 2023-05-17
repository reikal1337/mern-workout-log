import { StyledWorkoutLogExerciese } from '../styles/WorkoutLogExercise.styles'
import { SimpleButtonBlue } from '../styles/Buttons.syles'
import WorkoutLogSets from './WorkoutLogSets'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
function WorkoutLogExercise(props) {
  const [setsData,setSetsData] = useState([...props.sets])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(setsData)
  }

  const handleSetsChange = (_id,reps,weight) => {
    setSetsData((prevState) => {
      const setIndex = prevState.findIndex(data => data._id === _id)

      if(setIndex !== -1){
        const updatedSetsData = [...prevState]
        updatedSetsData[setIndex] = {_id,reps,weight}
        return updatedSetsData
      }else{
        return [...prevState, {_id,reps,weight}]
      }
    })
    
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
      
      <form onSubmit={handleSubmit}>
        {
          props.sets.map((object,i) => {
            return <WorkoutLogSets key={object._id} index={i} {...object} handleSetsChange={handleSetsChange} />
          })
        }
        <SimpleButtonBlue type="submit"/>
      </form>
      
    </StyledWorkoutLogExerciese>
  )
}

export default WorkoutLogExercise