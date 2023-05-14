import { useState, useEffect } from 'react'
import { WorkoutLogsStyled } from './styles/WorkoutLogs.styles'
import { WorkoutSearch } from '../components'
import { SimpleButtonBlue } from '../components/styles/Buttons.syles'
import { getWorkouts, reset } from "../features/workouts/workoutsSlice"
import { useDispatch, useSelector } from 'react-redux'

function WorkoutLogs() {
  const [search,setSearch] = useState("")
  

  

  const dispatch = useDispatch()

  const { workouts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.workouts
  )
  const [selectedWorkout, setSelectedWorkout] = useState("")

  

  useEffect(() => {
    dispatch(getWorkouts())
    return () => {
      if(workouts.lenght != 0){
        setSelectedWorkout(workouts[0]._id)
      }
      dispatch(reset())
    }
  },[])

  const handleSerachChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s0-9-]/gi, '')
    setSearch(result)
  }

  const getSearchData = (data) => {
    console.log(data)
  }

  

  const handleInputChange = (event) => {
    setSelectedWorkout(event.target.value)
    
  }


  const handleCreateButton = (event) => {
    event.preventDefault()
    console.log(selectedWorkout)
  }

  return (
    <WorkoutLogsStyled>
      <h2>Workout log</h2>
      
      <form onSubmit={handleCreateButton}>
        <div id="log-input-container">
          <input type="text" maxLength="50" value={search} onChange={handleSerachChange} placeholder="Filter..." />
          <select name="_id" value={selectedWorkout._id} onChange={handleInputChange} >
            {
            workouts.filter(object =>(
              object.name.toLowerCase().includes(search.toLowerCase())
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
      <WorkoutSearch  onSubmit={getSearchData}/>

      

      

      
      
    </WorkoutLogsStyled>
  )
}

export default WorkoutLogs