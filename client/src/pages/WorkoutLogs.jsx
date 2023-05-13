import { useState, useEffect } from 'react'
import { WorkoutLogsStyled } from './styles/WorkoutLogs.styles'
import { WorkoutSearch } from '../components'
import { SimpleButtonBlue } from '../components/styles/Buttons.syles'
import { getWorkouts, reset } from "../features/workouts/workoutsSlice";
import { useDispatch, useSelector } from 'react-redux';

function WorkoutLogs() {
  const [search,setSearch] = useState("")

  const [editData, setEditData] = useState({
    _id: "",
    name:  "",
    bodyParts: "",
    sets: 1,
    reps: 1
  })

  const dispatch = useDispatch()

  const { workouts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.workouts
  )

  

  useEffect(() => {
    dispatch(getWorkouts())
    return () => {
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
    const {name, value} = event.target

    if(name === "sets") {
      if(value >= 1 && value <= 15){
        setEditData({
          ...editData,
          [name]: value
        })
      }
    }else if(name === "reps") {
      if(value > 0){
        setEditData({
          ...editData,
          [name]: value
        })
      }
    }else{
      const [_idInput, nameInput, bodyPartsInput] = value.split(",")
      setEditData({
        ...editData,
        _id: _idInput,
        name: nameInput,
        bodyParts: bodyPartsInput
      })
    }
  }


  const handleCreateButton = (event) => {
    event.preventDefault()
    console.log("Creating shit!")
  }

  return (
    <WorkoutLogsStyled>
      <h2>Workout log</h2>
      
      <form onSubmit={handleCreateButton}>
        <div id="log-input-container">
          <input type="text" maxLength="50" value={search} onChange={handleSerachChange} placeholder="Filter..." />
          <select name="_id" value={editData._id} onChange={handleInputChange} >
            {
            workouts.filter(object =>(
              object.name.toLowerCase().includes(search.toLowerCase())
            )).map(object => {
              return <option value={object._id}>{object.name}</option>
            })
            }
          </select>
        </div>
        <SimpleButtonBlue type='submit'>Log Workout</SimpleButtonBlue>
      </form>
      <WorkoutSearch onSubmit={getSearchData}/>
      
    </WorkoutLogsStyled>
  )
}

export default WorkoutLogs