import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout, WorkoutSearch, CreateWorkouteForm, Loading, Notification } from "../components"
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts, postWorkout, deleteWorkout, updateWorkout, reset } from "../features/workouts/workoutsSlice";
import { getExercieses, reset as savedExerciesesReset } from "../features/savedExercises/savedExercisesSlice";
import { useCheckIfLogIn } from "../helpers/util"

function Workouts() {
  useCheckIfLogIn()

  const[popUp,setPopUp] = useState(false)
  const [search,setSearch] = useState("")
  const dispatch = useDispatch()

  const { workouts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.workouts
  )

  useEffect(() => {
    dispatch(getWorkouts())
    dispatch(getExercieses())

    return () => {
      dispatch(reset())
      dispatch(savedExerciesesReset())
    }
  },[dispatch])

  const getSearchData = (data) => {
    setSearch(data)
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

  const handleSaveExercises = (id,data) => {
    dispatch(updateWorkout({id,data}))
    dispatch(reset())
  }


  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }
 
  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        {
          isError && message ? <Notification isBlue={false} text={message}/> :
          isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
        }
        
        <WorkoutSearch onSubmit={getSearchData}/>
        <SimpleButtonBlue onClick={handleCreateButton} id="button-create">Create Workout</SimpleButtonBlue>
        <CreateWorkouteForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData}></CreateWorkouteForm>
        {
          workouts.length === 0 && <h4>No Workouts</h4>
        }
        { workouts.filter(object => (
          object.name.toLowerCase().includes(search.toLowerCase())
        )).map(object => {
            return( 
              <Workout key={object._id} {...object} onSave={handleSaveExercises} onDelete={handleDelete} />
              )
            
          })
        }
    </WorkoutsStyled>
  )
}

export default Workouts