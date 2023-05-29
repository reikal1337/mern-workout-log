import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, serachExercieses, saveExercies, reset } from "../features/globalExercises/globalExercisesSlice";
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, Loading, Notification } from "../components";
import { useSearchParams } from "react-router-dom";


function Exercises() {

  const dispatch = useDispatch()

  const { exercises, page, pageMax, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.globalExerciese
  )
  const [searchParams, setSearchParams] = useSearchParams();

  const [showLimti, setShowLimit] = useState("10")


  useLayoutEffect(() => {
    console.log("Lol")
    dispatch(getExercieses({limit: showLimti}))

    return () => {
      dispatch(reset())
    }
  }, [showLimti])

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
      <form id="limit-form">
        <label for="limit"> Show per page: </label>
        <select name="limit" value={showLimti} onChange={(e) => setShowLimit(e.target.value)} >
          <option value="10" >10</option>
          <option value="25" >25</option>
          <option value="50" >50</option>
          <option value="100" >100</option>
        </select>
      </form>
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
      <p>Current Page: {page}</p>
      <p>Max pages : {pageMax}</p>
    </ExercisesStyled>
    
  )
}

export default Exercises