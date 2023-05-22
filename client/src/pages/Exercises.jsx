import { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, serachExercieses, saveExercies, reset } from "../features/globalExercises/globalExercisesSlice";
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, Loading, Notification } from "../components";
import { useSearchParams } from "react-router-dom";


function Exercises() {

  const dispatch = useDispatch()

  const { exercises, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.globalExerciese
  )
  const [searchParams, setSearchParams] = useSearchParams();


  useLayoutEffect(() => {
    console.log("Lol")
    dispatch(getExercieses())

    return () => {
      dispatch(reset())
    }
  }, [])

  const getSearchData = (data) => {
    setSearchParams({name: data.field, bodypart: data.bodyPart})
    const name =  data.field
    const bodypart = data.bodyPart
    const serachQuery ={
      name,
      bodypart
    }
    dispatch(serachExercieses(serachQuery))
    dispatch(reset())
  }
  
  const handleSave = (id) => {
    dispatch(saveExercies(id))
    dispatch(reset())
  }

  return (
    <ExercisesStyled>
      <h2>Exercises</h2>
      {
          isError && message ? <Notification isBlue={false} text={message}/> :
          isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
      }
      
      <ExercisesSearch local={false} onSubmit={getSearchData} />
      {
        exercises.length === 0 && <h4>No exercises</h4>
      }
      {!isLoading ?
      exercises.map(object => {
        return( 
          <Exercise key={object._id} {...object} public={true} onSave={handleSave}/>
          )
        
      })
      :
      <Loading size={"100"} speed={"4"} />
      } 
    </ExercisesStyled>
    
  )
}

export default Exercises