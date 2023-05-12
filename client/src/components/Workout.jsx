import { useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "./styles/Buttons.syles"
import { WorkoutStyled } from "./styles/Workout.styles"
import { BiDownArrow } from "react-icons/bi"
import { useSelector } from "react-redux";

function Workout(props) {
  const [collapsedIndex,setCollapsedIndex] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [search,setSearch] = useState("")

  const [editData, setEditData] = useState({
    _id: "",
    name: "",
    sets: 1,
    reps: 1
  })

  const [addedExercises, setAddedExercises] = useState([])

  const { savedExercises } = useSelector(
    (state) => state.savedExercises
  )

  

  function handleClick(id) {
    setCollapsedIndex( prevState => 
      prevState === id ? prevState = "" : prevState = id)
      setEditMode(false)
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
      setEditData({
        ...editData,
        [name]: value
      })
    }else{
      const [_idInput, nameInput] = value.split(",")
      setEditData({
        ...editData,
        _id: _idInput,
        name: nameInput
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newExercise = {...editData}
    setAddedExercises([
      ...addedExercises,
      newExercise
    ])
    console.log(addedExercises)
    // props.onSave(editData)
  }

  const handleEditMode = () => {
    console.log("Edit mode change!")
    setEditMode(prevState => !prevState)
  }

  function returnFullExercises(data) { //Probbaly need to remove this and move it to Workout log.
    return data.map( object => {
     return (
      <div className={"exercise-content"}>
        <h4>{object.exerciseName}</h4>
        <h6 >{object.bodyParts}</h6>
        {object.sets.map( object => {

          return(
          <div >
            <span>Set: {object.set}</span>
            <span>Reps: {object.reps}</span>
            <span>Weight: {object.weight}kg</span>
          </div>
          )
        })}

      </div>
     )
    })
  }

  function returnFullExercisesEdit(data) {
    
  }

  return (
    <WorkoutStyled>
      <div className={props.id !== collapsedIndex ? "workout-title" : "workout-title activetitle"} onClick={ () => handleClick(props.id)}>
        <h3 >{props.name} </h3>
        <BiDownArrow className={props.id !== collapsedIndex ? "icon-arrow" : "icon-arrow activeicon"}/>
      </div>
      <div className={props.id !== collapsedIndex ? "workout-content" : "workout-content active"}>

        {
        returnFullExercises(props.exercises)
        }

       { editMode &&
       <form onSubmit={handleSubmit}>
        <input type="text" maxLength="50" value={search} onChange={handleSerachChange} placeholder="Filter..." />
        <select name="_id" value={`${editData._id},${editData.name}`} onChange={handleInputChange} >
          {
          savedExercises.filter(object =>(
            object.name.toLowerCase().includes(search)
          )).map(object => {
            return <option value={`${object._id},${object.name}`}>{object.name}</option>
          })
          }
        </select>
        <div id="set-rep-container">
          <label>Sets: <input type="number" name="sets" value={editData.sets} onChange={handleInputChange} /></label>
          <label>Reps: <input type="number" name="reps"  value={editData.reps} onChange={handleInputChange} /></label>
        </div>
        <div id="add-exercise-container">
          <SimpleButtonBlue type="submit" >Add Exerciese</SimpleButtonBlue>
        </div>
      </form>
        }
        <div className="button-container">
          <SimpleButtonBlue onClick={handleEditMode}>{editMode ? "Save" : "Edit"}</SimpleButtonBlue>
          <SimpleButtonRed onClick={() => props.onDelete(props._id)}>Delete</SimpleButtonRed>
        </div>
      </div>
      
    </WorkoutStyled>
  )
}

export default Workout