import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch } from "../components";
import mockData  from "../components/mockExerciseData";

function SavedExercises() {

  const getSearchData = (data) => {
    console.log(data)
  }

  return (
    <ExercisesStyled>
      <h2>Saved Exercises</h2> 
      <ExercisesSearch onSubmit={getSearchData} />
      <button>Create Exerciece</button>
      {mockData.map(object => {
        return !object.public ? <Exercise key={object.id} {...object}/> : "" 
        
      })}

    </ExercisesStyled>
    
  )
}

export default SavedExercises