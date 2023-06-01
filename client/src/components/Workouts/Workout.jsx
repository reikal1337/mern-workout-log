import { useEffect, useLayoutEffect, useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "../styles/Buttons.syles"
import { WorkoutStyled } from "../styles/Workout.styles"
import { BiDownArrow } from "react-icons/bi"
import { useSelector } from "react-redux"
import WorkoutExercise from "./WorkoutExercise"
import { formatBodyParts } from "../../helpers/util"
import { nanoid } from "@reduxjs/toolkit"

function Workout(props) {
  const [collapsedIndex,setCollapsedIndex] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [search,setSearch] = useState("")

  const { savedExercises } = useSelector(
    (state) => state.savedExercises
  )

  const [editData, setEditData] = useState({
      _id: "",
      name:  "",
      bodyParts: "",
      sets: 1,
      reps: 1
    })
  

  const [displayedExercises, setDisplayedExercises] = useState([])

  useLayoutEffect(() => {
    resetDiplayedExercises()

  },[])

  useEffect(() => {
    if(savedExercises.length != 0){
      setEditData({
        ...editData,
        _id: savedExercises[0]._id,
        name: savedExercises[0].name,
        bodyParts: formatBodyParts(savedExercises[0].bodyParts)
      })
    }
    
  },[savedExercises])

  

  function handleClick(id) {
    setCollapsedIndex( prevState => 
      prevState === id ? prevState = "" : prevState = id)
      setEditMode(false)
      resetDiplayedExercises()

  }

  const handleSerachChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s0-9-]/gi, '')
    setSearch(result)
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target

    if(name === "sets") {
      if(value >= 1 && value <= 15){
        setEditData({
          ...editData,
          [name]: value
        })
      }
    }else if(name === "reps") {
      if(value > 0 && value < 200){
        setEditData({
          ...editData,
          [name]: value
        })
      }
    }else{
      const [_idInput, nameInput, bodyPartsInput] = value.split(",")
      setEditData({
        ...editData,
        _id: _idInput,
        name: nameInput,
        bodyParts: bodyPartsInput
      })
    }
  }

  const resetDiplayedExercises = () => {
    setDisplayedExercises([
      ...props.exercises
    ])
  }

  const handleAddExercise = (event) => {
    event.preventDefault()
    if(editData.name !== ""){
      setDisplayedExercises([
        ...displayedExercises,
        {...editData}
      ])
    }
    
  }

  const handleSave = () => {
    if(editMode){
      props.onSave(props._id,displayedExercises)
    }
    setEditMode(prevState => !prevState)
    
  }
  const handleDelete = () => {
    if(editMode){
      resetDiplayedExercises()
      setEditMode(false)
    }else{
      props.onDelete(props._id)
    }
    
  }

  const handleRemoveExercise = (index) => {
    setDisplayedExercises(
      displayedExercises.filter(
        (_, i) => i !== index
      )
    )
  }

  return (
    <WorkoutStyled>
      <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
      </div>
      <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}>
        {
          
          displayedExercises.map((object,i) => {
            return <WorkoutExercise key={`${object._id},${nanoid()}`}  editMode={editMode} index={i} onRemove={handleRemoveExercise} {...object}/>
          })
        }
       { editMode &&
       <form onSubmit={handleAddExercise}>
        <label htmlFor="_id" className="select-lable">Exercises:</label>
        <div className="input-container">
          <input type="text" maxLength="50" value={search} onChange={handleSerachChange} placeholder="Filter..." />
          <select name="_id" value={`${editData._id},${editData.name},${editData.bodyParts}`} onChange={handleInputChange} >
            {
            savedExercises.filter(object =>(
              object.name.toLowerCase().includes(search.toLowerCase())
            )).map(object => {
              return <option key={`${object._id},${nanoid()}`} 
              value={`${object._id},${object.name},${formatBodyParts(object.bodyParts)}`}>{object.name}</option>
            })
            }
          </select>
        </div>
        <div className="set-rep-container">
          <label>Sets: <input type="number" name="sets" value={editData.sets} onChange={handleInputChange} /></label>
          <label>Reps: <input type="number" name="reps"  value={editData.reps} onChange={handleInputChange} /></label>
        </div>
        <div className="add-exercise-container">
          <SimpleButtonBlue type="submit" >Add Exercise</SimpleButtonBlue>
        </div>
      </form>
        }
        <div className="button-container">
          <SimpleButtonBlue onClick={handleSave}>{editMode ? "Save" : "Edit"}</SimpleButtonBlue>
          <SimpleButtonRed onClick={handleDelete}>{editMode ? "Cancel" : "Delete"}</SimpleButtonRed>
        </div>
      </div>
      
    </WorkoutStyled>
  )
}

export default Workout