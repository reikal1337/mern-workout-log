import { useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, serachExercieses, saveExercies, reset } from "../features/globalExercises/globalExercisesSlice";
import { ExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, Loading, Notification, PageBar } from "../components";
import { useSearchParams } from "react-router-dom";
import { useCheckIfLogIn } from "../helpers/util"


function Exercises() {
  useCheckIfLogIn()
  
  const dispatch = useDispatch()

  const { exercises, page, pageMax, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.globalExerciese
  )
  const [searchParams, setSearchParams] = useSearchParams();

  const [showLimti, setShowLimit] = useState("10")
  const [currentPage, setCurrentPage] = useState(1)


  useLayoutEffect(() => {
    dispatch(getExercieses({
      limit: showLimti,
      page: 1,
    }))
    setCurrentPage(1)
    return () => {
      dispatch(reset())
    }
  }, [showLimti])

  useLayoutEffect(() => {
    dispatch(getExercieses({
      limit: showLimti,
      page: currentPage,
    }))

    return () => {
      dispatch(reset())
      window.scrollTo(0, 0)
    }
  }, [currentPage])

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

  const changeCurrentPage = (page) => {
    console.log("Change")
      setCurrentPage(page)
  }

  const nextPage = () => {
    console.log("next")
    if(currentPage < pageMax ){
      setCurrentPage(prevState => prevState + 1)
    }
  }

  const prevousPage = () => {
    console.log("prev")
    if(currentPage > 1){
      setCurrentPage(prevState => prevState - 1)
    }
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
        <label htmlFor="limit">Show per page: </label>
        <select name="limit" value={showLimti} onChange={(e) => setShowLimit(e.target.value)} >
          <option value="10" >10</option>
          <option value="25" >25</option>
          <option value="50" >50</option>
          <option value="100" >100</option>
        </select>
      </form>
      <PageBar changeChange={changeCurrentPage} nextPage={nextPage} prevousPage={prevousPage} currentPage={currentPage} pageMax={pageMax} />
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
      
      <PageBar changeChange={changeCurrentPage} nextPage={nextPage} prevousPage={prevousPage} currentPage={currentPage} pageMax={pageMax} />

    </ExercisesStyled>
    
  )
}

export default Exercises