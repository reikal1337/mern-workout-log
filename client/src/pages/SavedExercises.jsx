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

  const getCreateData = (data) => {
    console.log(data)
  }

  const handleButton = () => {
    console.log("lol")
    setPopUp(true)
  }

  return (
    <SavedExercisesStyled>
      <h2>Saved Exercises</h2> 
      <ExercisesSearch onSubmit={getSearchData} />
      <SimpleButtonBlue onClick={handleButton} id="buttton-create">Create Exerciece</SimpleButtonBlue>
      <CreateExerciseForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData} />
      {mockData.map(object => {
        return !object.public ? <Exercise key={object.id} {...object}/> : "" 
        
      })}

    </SavedExercisesStyled>
    
  )
}

export default SavedExercises