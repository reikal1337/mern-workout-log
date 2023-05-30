import { useState, useEffect, useLayoutEffect } from 'react'
import { WorkoutLogsStyled } from './styles/WorkoutLogs.styles'
import { WorkoutSearch, Notification, Loading, WorkoutLog } from '../components'
import { SimpleButtonBlue } from '../components/styles/Buttons.syles'
import { getWorkouts, reset as workoutsReset } from "../features/workouts/workoutsSlice"
import { useDispatch, useSelector } from 'react-redux'
import { getWorkoutLogs, postWorkoutLog, reset } from '../features/workoutLogs/workoutLogsSlice'
import { useCheckIfLogIn } from "../helpers/util"

function WorkoutLogs() {
  useCheckIfLogIn()

  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("")
  
  const dispatch = useDispatch()

  const { workouts } = useSelector(
    (state) => state.workouts
  )
  const { workoutLogs, isLoading, isSuccess, isError, message } = useSelector(
    (state) =>  state.workoutLogs
  )
  const [selectedWorkout, setSelectedWorkout] = useState("")

  useEffect(() => {
    dispatch(getWorkouts())
    dispatch(getWorkoutLogs())
    return () => {
      dispatch(reset())
      dispatch(workoutsReset())
    }
  },[])

  useEffect(() => {
    if(workouts.length !== 0){
      setSelectedWorkout(workouts[0]._id)
    }
    
  },[workouts])
  console.log(message)



  const handleFilterChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s0-9-]/gi, '')
    setFilter(result)
  }

  const getSearchData = (data) => {
    setSearch(data)
  }

  

  const handleInputChange = (event) => {
    setSelectedWorkout(event.target.value)
    
  }


  const handleCreateButton = (event) => {
    event.preventDefault()
    console.log(selectedWorkout)
    dispatch(postWorkoutLog(selectedWorkout))
    dispatch(reset())
  }

  

  

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }
  return (
    <WorkoutLogsStyled>
      <h2>Workout log</h2>
      {
        isError && message ? <Notification isBlue={false} text={message}/> :
        isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
      }

      <form onSubmit={handleCreateButton}>
        <div id="log-input-container">
          <input type="text" maxLength="50" value={filter} onChange={handleFilterChange} placeholder="Filter..." />
          <select name="_id" value={selectedWorkout._id} onChange={handleInputChange} >
            {
            workouts.filter(object =>(
              object.name.toLowerCase().includes(filter.toLowerCase())
            )).map(object => {
              return <option key={object._id} value={object._id}>{object.name}</option>
            })
            }
          </select>
        </div>
        <div id="log-create-button">
          <SimpleButtonBlue  type='submit'>Create Workout Log</SimpleButtonBlue>
        </div>
      </form>
      <WorkoutSearch onSubmit={getSearchData}/>
      {
          workoutLogs.length === 0 && <h4>No Workout Logs</h4>
      }

      {workoutLogs.filter(object => (
        object.name.toLowerCase().includes(search.toLowerCase())
      )).map(object => {
              return <WorkoutLog key={object._id} {...object}/>
        })
      }
    </WorkoutLogsStyled>
  )
}

export default WorkoutLogs