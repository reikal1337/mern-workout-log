import { WorkoutsStyled } from "./styles/Workouts.style"
import { Workout, WorkoutSearch } from "../components"
import mockData from "../components/mockWorkoutData";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";


function Workouts() {

  const getSearchData = (data) => {
    console.log(data)
  }

  return (
    <WorkoutsStyled>
        <h2>Workouts</h2>
        <WorkoutSearch onSubmit={getSearchData}/>
        <SimpleButtonBlue id="button-create">Create Workout</SimpleButtonBlue>
        {mockData.map( object => {
          return(
            <Workout key={object.id} {...object} />
          )
        })}
        
        
    </WorkoutsStyled>
  )
}

export default Workouts