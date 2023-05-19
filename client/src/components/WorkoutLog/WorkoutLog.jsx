import { useState } from 'react'
import { BiDownArrow } from "react-icons/bi"
import { WorkoutLogStyled } from '../styles/WorkoutLog.styles'
import WorkoutLogExercise from './WorkoutLogExercise'
import { SimpleButtonBlue, SimpleButtonRed } from '../styles/Buttons.syles'
import Exercise from '../Global&SavedExercise/Exercise'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteWorkoutLog, submitWorkoutLog, reset } from '../../features/workoutLogs/workoutLogsSlice'

function WorkoutLog(props) {
    const [collapsedIndex,setCollapsedIndex] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [exercises,setExercises] = useState([...props.exercises])


    const currentDateTime = new Date()
    const currentDate = currentDateTime.toISOString().split('T')[0]
    const currentTime = `${currentDateTime.getHours().toString().padStart(2,"0")}:${currentDateTime.getMinutes().toString().padStart(2,"0")}`

    const [dateTime, setDateTime ] = useState({
      date: currentDate,
      time: currentTime,
      duration: "00:00"
    })

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

      const updateLogWorkout = (event) => {
        event.preventDefault()
        const reqData ={
          data:{
            exercises,
            startDate: `${dateTime.date}T${dateTime.time}`,
            duration: dateTime.duration
          },
          id: props._id

        }
        console.log(reqData)
        dispatch(submitWorkoutLog(reqData))
      }

      const handleDateTimeChange = (event) => {
        const { name, value} = event.target
        setDateTime(prevSate => ({
          ...prevSate,
          [name]: value
        }))
      }


    const handleExerciseChange = (ex,index) => {
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
      <form onSubmit={updateLogWorkout}>
        {
          props.exercises.map((object,i) => {
            return <WorkoutLogExercise handleExerciseChange={handleExerciseChange}  key={object._id} index={i} {...object} />
          })
        }
        <div className="date-time-container">
          <label htmlFor="date">Date: </label>
          <input type="date" name='date' value={dateTime.date} onChange={handleDateTimeChange} />

          <label htmlFor="time">Time: </label>
          <input type="time" name="time" value={dateTime.time} onChange={handleDateTimeChange} />

          <label htmlFor="duration">Duration: </label>
          <input type="time" name="duration" value={dateTime.duration} onChange={handleDateTimeChange} />

        </div>
        <div className="button-container">
          <SimpleButtonBlue type='submit' >{editMode ? "Submit" : "Input"}</SimpleButtonBlue>
          <SimpleButtonRed type='button' onClick={deleteLog} >{editMode ? "Cancel" : "Delete"}</SimpleButtonRed>
        </div>
        </form>
      </div>
      
    </WorkoutLogStyled>
  )
}

export default WorkoutLog