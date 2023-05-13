import { useEffect } from "react";
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


  useEffect(() => {
    dispatch(getExercieses())

    return () => {
      dispatch(reset())
    }
  },[dispatch])

  // useEffect(() =>{
  //   if(isError){
  //     console.log(message)//Change to diplay error...
  //   }
    
    
  // },[isError, message])

  const getSearchData = (data) => {
    setSearchParams({name: data.field, bodypart: data.bodyPart})
    const name =  data.field
    const bodypart = data.bodyPart
    const serachQuery ={
      name,
      bodypart
    }
    dispatch(serachExercieses(serachQuery))
  }
  
  const handleSave = (id) => {
    dispatch(saveExercies(id))
    dispatch(reset())
  }

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }

  return (
    <ExercisesStyled>
      <h2>Exercises</h2>
      {
          isError && message ? <Notification isBlue={false} text={message}/> :
          isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
      }
      
      <ExercisesSearch onSubmit={getSearchData} />
      {
        exercises.length === 0 && <h4>No exercises</h4>
      }
      {
      exercises.map(object => {
        return( 
          <Exercise key={object._id} {...object} public={true} onSave={handleSave}/>
          )
        
      })}

      
    </ExercisesStyled>
    
  )
}

export default Exercises