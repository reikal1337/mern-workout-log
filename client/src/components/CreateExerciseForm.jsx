
import { useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "./styles/Buttons.syles"
import { CreateForm } from "./styles/CreateExerciseForm.styles"
import { AiOutlineClose } from "react-icons/ai"
import ReactDom from "react-dom"

function CreateExerciseForm(props) {

    const [formData,setFormData] = useState({
        name: "",
        description: "",
        bodyParts: {
            chest: false,
            back: false,
            arms: false,
            abdominals: false,
            legs: false,
            shoulders: false
        }
        
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(formData)
    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleCheckChange = (event) => {
        const {name,checked} = event.target
        setFormData( (prevState) => {
            const newState = {...prevState}
            newState.bodyParts[name] = checked
            return newState
        })
    }

  return  props.popUp  ? ReactDom.createPortal(
    <CreateForm >
        <div id="create-popup-background" onClick={() => props.setPopUp(false)} />
        <div id="form-container">
        <form onSubmit={handleSubmit}>
            <SimpleButtonRed id="button-exit" onClick={() => props.setPopUp(false)}>{<AiOutlineClose />}</SimpleButtonRed>
            <h3>Create Exercise</h3>
            <input name="name" id="input-field" value={formData.name} onChange={handleChange} maxLength="50" placeholder="Exerciece name..." />
            <textarea name="description" value={formData.description} onChange={handleChange} maxLength="252" placeholder="Description..."  />
            <div>
                <label>
                    <input type="checkbox" name="chest" checked={formData.bodyParts.chest} onChange={handleCheckChange} />
                    Chest
                </label>
                <label>
                    <input type="checkbox" name="back" checked={formData.bodyParts.back} onChange={handleCheckChange} />
                    Back
                </label>
                <label>
                    <input type="checkbox" name="arms" checked={formData.bodyParts.arms} onChange={handleCheckChange} />
                    Arms
                </label>
                <label>
                    <input type="checkbox" name="abdominals" checked={formData.bodyParts.abdominals} onChange={handleCheckChange} />
                    Abdominals
                </label>
                <label>
                    <input type="checkbox" name="legs" checked={formData.bodyParts.legs} onChange={handleCheckChange} />
                    Legs
                </label>
                <label>
                    <input type="checkbox" name="shoulders" checked={formData.bodyParts.shoulders} onChange={handleCheckChange} />
                    Shoulders
                </label>
            </div>
            
            <SimpleButtonBlue type="Submit">Create</SimpleButtonBlue>
        </form>
        </div>
        
    </CreateForm>,
    document.getElementById("popup-portal")
  ) : ""
}

export default CreateExerciseForm