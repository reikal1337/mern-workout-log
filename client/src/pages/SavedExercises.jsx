import { SavedExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, CreateExerciseForm, Loading } from "../components";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, postExerciese, publishExerciese, reset } from "../features/savedExercises/savedExercisesSlice";

function SavedExercises() {
  const[popUp,setPopUp] = useState(false)
  const dispatch = useDispatch()

  const {savedExercises, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.savedExercieses
  )
  useEffect(() => {
    dispatch(getExercieses())
    if(isError){
      console.log(message)//Change to diplay error...
    }

    return () => {
      dispatch(reset())
    }
  },[dispatch])

  const handlePublish = (id) => {
    console.log(id)
    dispatch(publishExerciese(id))
    dispatch(reset())
  }

  const getSearchData = (data) => {
    console.log(data)
  }

  const getCreateData = (data) => {
    console.log(data)
    dispatch(postExerciese(data))
    dispatch(reset())
  }

  const handleButton = () => {
    console.log("lol")
    setPopUp(true)
  }

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }

  return (
    <SavedExercisesStyled>
      <h2>Saved Exercises</h2> 
      <ExercisesSearch onSubmit={getSearchData} />
      <SimpleButtonBlue onClick={handleButton} id="buttton-create">Create Exerciece</SimpleButtonBlue>
      <CreateExerciseForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData} />
      {
        savedExercises.length === 0 && <h4>No exercises</h4>
      }
      {
      savedExercises.map(object => {
        return( 
          <Exercise key={object._id} {...object} public={false} onPublish={handlePublish}/>
          )
        
      })}

    </SavedExercisesStyled>
    
  )
}

export default SavedExercises