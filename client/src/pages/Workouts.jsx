import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout, WorkoutSearch, CreateWorkouteForm } from "../components"
import mockData from "../components/mockWorkoutData";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState } from "react";


function Workouts() {
  const[popUp,setPopUp] = useState(false)

  const getSearchData = (data) => {
    console.log(data)
  }

  const getCreateData = (data) => {
    console.log(data)
  }

  const handleCreateButton = () => {
    setPopUp(true)
  }

  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        <WorkoutSearch onSubmit={getSearchData}/>
        <SimpleButtonBlue onClick={handleCreateButton} id="button-create">Create Workout</SimpleButtonBlue>
        <CreateWorkouteForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData}></CreateWorkouteForm>
        {mockData.map( object => {
          return(
            <Workout key={object.id} {...object} />
          )
        })}
        
        
    </WorkoutsStyled>
  )
}

export default Workouts