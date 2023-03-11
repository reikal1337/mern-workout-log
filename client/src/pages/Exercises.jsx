import testImg from "../assets/images/testImg.jpg"
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch } from "../components";

import mockData  from "../components/mockExerciseData";

function Exercises() {
  
  const getSearchData = (data) => {
    console.log(data)
  }

  return (
    <ExercisesStyled>
      <h2>Exercises</h2>
      <ExercisesSearch onSubmit={getSearchData} />

      {mockData.map(object => {
        return object.public ? <Exercise key={object.id} {...object}/> : "" 
        
      })}
      
    </ExercisesStyled>
    
  )
}

export default Exercises