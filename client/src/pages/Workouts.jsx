import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout, WorkoutSearch, CreateWorkouteForm, Loading } from "../components"
import mockData from "../components/mockWorkoutData";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts, reset } from "../features/workouts/workoutsSlice";


function Workouts() {
  const[popUp,setPopUp] = useState(false)

  const dispatch = useDispatch();

  const { workouts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.workouts
  )

  useEffect(() => {
    dispatch(getWorkouts())
    if(isError){
      console.log(message)//Change to diplay error...
    }

    return () => {
      dispatch(reset())
    }
  },[dispatch])

  const getSearchData = (data) => {
    console.log(data)
  }

  const getCreateData = (data) => {
    
    setPopUp(false)
  }

  const handleCreateButton = () => {
    setPopUp(true)
  }

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }
 console.log(workouts.length)
 console.log(workouts)
 
  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        <WorkoutSearch onSubmit={getSearchData}/>
        <SimpleButtonBlue onClick={handleCreateButton} id="button-create">Create Workout</SimpleButtonBlue>
        <CreateWorkouteForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData}></CreateWorkouteForm>
        {
          workouts.length === 0 && <h4>No Workouts</h4>
        }
        {
          workouts.map(object => {
            return( 
              <Workout key={object._id} {...object} />
              )
            
          })
        }
        {mockData.map( object => {
          return(
            <Workout key={object.id} {...object} />
          )
        })}
        
        
    </WorkoutsStyled>
  )
}

export default Workouts