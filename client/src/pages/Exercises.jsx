import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, serachExercieses, reset } from "../features/globalExercises/globalExercisesSlice";
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch } from "../components";
import { useSearchParams } from "react-router-dom";



import mockData  from "../components/mockExerciseData";




function Exercises() {

  const dispatch = useDispatch()

  const { exercises, isLoading, isError, message } = useSelector(
    (state) => state.globalExerciese
  )
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() =>{
    if(isError){
      console.log(message)
    }
    dispatch(getExercieses())
    return () => {
      dispatch(reset())
    }
  },[isError, message, dispatch ])





  
  const getSearchData = (data) => {
    setSearchParams({name: data.field, bodypart: data.bodyPart})
    const name = searchParams.get("name")
    const bodypart = searchParams.get("bodypart")
    console.log(name)
    console.log(bodypart)
    const serachQuery ={
      name,
      bodypart
    }
    dispatch(serachExercieses(serachQuery))

  }

  return (
    <ExercisesStyled>
      <h2>Exercises</h2>
      <ExercisesSearch onSubmit={getSearchData} />

      {/* {mockData.map(object => {
        return object.public ? <Exercise key={object.id} {...object}/> : "" 
        
      })} */}
      {exercises.map(object => {
        return( 
          <Exercise key={object._id} {...object} public={true}/>
          )
        
      })}
      
    </ExercisesStyled>
    
  )
}

export default Exercises