import { SavedExercisesStyled } from "./styles"
import { Exercise, ExercisesSearch, CreateExerciseForm, Loading, Notification } from "../components";
import { SimpleButtonBlue } from "../components/styles/Buttons.syles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, postExerciese, publishExerciese, deleteExerciese, removeExerciese, reset } from "../features/savedExercises/savedExercisesSlice";
import { useCheckIfLogIn } from "../helpers/util"

function SavedExercises() {
  useCheckIfLogIn()
  
  const[popUp,setPopUp] = useState(false)

  const [search,setSearch] = useState({
    field: "",
    bodyPart: ""
  })

  const dispatch = useDispatch()

  const {savedExercises, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.savedExercises
  )
  
  useEffect(() => {
    dispatch(getExercieses())
    return () => {
      dispatch(reset())
    }
  },[dispatch])


  const handlePublish = (id) => {
    dispatch(publishExerciese(id))
    dispatch(reset())
  }

  const handleDelete = (id) => {
    dispatch(deleteExerciese(id))
    dispatch(reset())
  }

  const handleRemove = (id) => {
    dispatch(removeExerciese(id))
    dispatch(reset())
  }

  const getSearchData = (data) => {
    setSearch(prevState =>({
      ...prevState,
      field: data.field,
      bodyPart: data.bodyPart !== "all" ? data.bodyPart : ""
    }))
    
  }

  const getCreateData = (data) => {
    dispatch(postExerciese(data))
    dispatch(reset())
    setPopUp(false)
  }

  const handleCreateButton = () => {
    setPopUp(true)
  }

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
 }

  return (
    <SavedExercisesStyled>
      <h2>Saved Exercises</h2> 

      {
        isError && message ? <Notification isBlue={false} text={message}/> :
        isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
      }

      <ExercisesSearch local={true}onSubmit={getSearchData} />
      <SimpleButtonBlue onClick={handleCreateButton} id="buttton-create">Create Exerciece</SimpleButtonBlue>
      <CreateExerciseForm popUp={popUp} setPopUp={setPopUp} onSubmit={getCreateData} />
      {
        savedExercises.length === 0 && <h4>No exercises</h4>
      }
      {savedExercises.filter(object => (
        object.name.toLowerCase().includes(search.field.toLowerCase())
        && object.bodyParts.join("").toLowerCase().includes(search.bodyPart)
        
      )).map(object => {
        return( 
          <Exercise key={object._id} {...object} public={false} onDelete={handleDelete} onRemove={handleRemove} onPublish={handlePublish}/>
          )
        
      })}

    </SavedExercisesStyled>
    
  )
}

export default SavedExercises