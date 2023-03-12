import { SavedExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, CreateExerciseForm } from "../components";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import mockData  from "../components/mockExerciseData";
import { useState } from "react";

function SavedExercises() {
  const[popUp,setPopUp] = useState(false)

  const getSearchData = (data) => {
    console.log(data)
  }

  return (
    <SavedExercisesStyled>
      <h2>Saved Exercises</h2> 
      <ExercisesSearch onSubmit={getSearchData} />
      <SimpleButtonBlue onClick={() => setPopUp(true)}  id="buttton-create">Create Exerciece</SimpleButtonBlue>
      <CreateExerciseForm popUp={popUp} setPopUp={setPopUp}/>
      {mockData.map(object => {
        return !object.public ? <Exercise key={object.id} {...object}/> : "" 
        
      })}

    </SavedExercisesStyled>
    
  )
}

export default SavedExercises