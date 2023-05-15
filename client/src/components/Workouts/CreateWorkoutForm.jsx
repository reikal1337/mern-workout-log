
import { useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "../styles/Buttons.syles"
import { CreateForm } from "../styles/CreateExerciseForm.styles"
import { AiOutlineClose } from "react-icons/ai"
import ReactDom from "react-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getExercieses, reset } from "../../features/savedExercises/savedExercisesSlice"

function CreateWorkouteForm(props) {

    const [formData,setFormData] = useState("")

    

    const handleChange = (event) => {
      const result = event.target.value.replace(/[^a-z\s0-9-]/gi, '')
      setFormData(result)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
       
        props.onSubmit(formData)
    }


  return  props.popUp && ReactDom.createPortal(
    <CreateForm >
        <div id="create-popup-background" onClick={() => props.setPopUp(false)} />
        <div id="form-container">
        <form onSubmit={handleSubmit}>
            <SimpleButtonRed id="button-exit" onClick={() => props.setPopUp(false)}>{<AiOutlineClose />}</SimpleButtonRed>
            <h3>Create Workout</h3>
            <h4>Name</h4>
            <input name="name" id="input-field" value={formData} onChange={handleChange}  type="text" minLength="2" maxLength="50" placeholder="Workout name..." />
            <SimpleButtonBlue type="Submit">Create</SimpleButtonBlue>
        </form>
        </div>
        
    </CreateForm>,
    document.getElementById("popup-portal")
  )
}

export default CreateWorkouteForm