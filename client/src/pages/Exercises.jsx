import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, reset } from "../features/globalExercises/globalExercisesSlice";
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch } from "../components";




import mockData  from "../components/mockExerciseData";



function Exercises() {

  const dispatch = useDispatch()

  const { exercises, isLoading, isError, message } = useSelector(
    (state) => state.globalExerciese
  )
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
    console.log(data)
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