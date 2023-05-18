import { useState } from 'react'
import { BiDownArrow } from "react-icons/bi"
import { WorkoutLogStyled } from '../styles/WorkoutLog.styles'
import WorkoutLogExercise from './WorkoutLogExercise'
import { SimpleButtonBlue, SimpleButtonRed } from '../styles/Buttons.syles'
import Exercise from '../Global&SavedExercise/Exercise'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteWorkoutLog, reset } from '../../features/workoutLogs/workoutLogsSlice'

function WorkoutLog(props) {
    const [collapsedIndex,setCollapsedIndex] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [exercises,setExercises] = useState([...props.exercises])

    const dispatch = useDispatch()

    // useEffect(() => {// Should be in updateLogWorkout...
    //   const { _id, name}= props
    //   props.updateLogWorkout({
    //     _id,
    //     name,
    //     exercises
    //   })
    //   // console.log(exercises)

    // },[exercises])

    function handleClick(id) {
        setCollapsedIndex( prevState => 
          prevState === id ? prevState = "" : prevState = id)
    
      }

      const deleteLog = () => {
        console.log("Delete")
        dispatch(deleteWorkoutLog(props._id))
        dispatch(reset())
      }

      const updateLogWorkout = () => {
        
      }


    const handleExerciseChange = (ex,index) => {
      // console.log(exercises)
      // console.log(ex)

      setExercises(prevState => {
        const newState = [...prevState]
        newState[index] = { ...newState[index], ...ex}
        return newState
      })
    }
      
  return (
    <WorkoutLogStyled>
    <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
    </div>
    <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}>
      <form>
        {
          props.exercises.map((object,i) => {
            return <WorkoutLogExercise handleExerciseChange={handleExerciseChange}  key={object._id} index={i} {...object} />
          })
        }
        <div className="button-container">
          <SimpleButtonBlue type='button' onClick={updateLogWorkout} >{editMode ? "Submit" : "Input"}</SimpleButtonBlue>
          <SimpleButtonRed type='button' onClick={deleteLog} >{editMode ? "Cancel" : "Delete"}</SimpleButtonRed>
        </div>
        </form>
      </div>
      
    </WorkoutLogStyled>
  )
}

export default WorkoutLog