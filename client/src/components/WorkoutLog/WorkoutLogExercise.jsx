import { StyledWorkoutLogExerciese } from '../styles/WorkoutLogExercise.styles'
import { SimpleButtonBlue } from '../styles/Buttons.syles'
import WorkoutLogSets from './WorkoutLogSets'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
function WorkoutLogExercise(props) {
  const [setsData,setSetsData] = useState([...props.sets])

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(setsData)
    }
  useEffect(() => {
    const { name, bodyParts,_id} = props
    props.handleExerciseChange({
      _id,
      name,
      bodyParts,
      sets: setsData

    },props.index)
  },[setsData])
  
  const handleSetsChange = (_id,reps,weight) => {
      setSetsData((prevState) => {
        const setIndex = prevState.findIndex(data => data._id === _id)
        // console.log(_id)
        // console.log(prevState)
        if(setIndex !== -1){
          const updatedSetsData = [...prevState]
          updatedSetsData[setIndex] = {_id,reps,weight}
          return updatedSetsData
        }else{
          return prevState
        }
      })
    
    }

  return (
    <StyledWorkoutLogExerciese>
        <div className="index-exit-container">
        <p>{`${props.index+1}.`}</p>
      </div>
      <h4>{props.name}</h4>
      <h6>{props.bodyParts}</h6>
        {
          props.sets.map((object,i) => {
            return <WorkoutLogSets submited={props.submited} key={object._id} index={i} {...object} handleSetsChange={handleSetsChange} />
          })
        }
        
      
    </StyledWorkoutLogExerciese>
  )
}

export default WorkoutLogExercise