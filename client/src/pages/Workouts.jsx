import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout, WorkoutSearch, CreateWorkouteForm, Loading, Notification } from "../components"
import mockData from "../components/mockWorkoutData";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts, postWorkout, deleteWorkout, reset } from "../features/workouts/workoutsSlice";


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
    dispatch(postWorkout({name: data}))
    dispatch(reset())
    setPopUp(false)
  }

  const handleCreateButton = () => {
    setPopUp(true)
  }

  const handleDelete = (id) => {
    dispatch(deleteWorkout(id))
    dispatch(reset())

  }


  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }
 
  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        {
          isError && message ? <Notification isBlue={false} message={message}/> : ""
        }
        {
          isSuccess && message ? <Notification isBlue={true} message={message}/> : ""
        }
        
        <WorkoutSearch onSubmit={getSearchData}/>
        <SimpleButtonBlue onClick={handleCreateButton} id="button-create">Create Workout</SimpleButtonBlue>
        <CreateWorkouteForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData}></CreateWorkouteForm>
        {
          workouts.length === 0 && <h4>No Workouts</h4>
        }
        {
          workouts.map(object => {
            return( 
              <Workout key={object._id} {...object} onDelete={handleDelete} />
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