
import { useState } from "react"
import { SimpleButtonBlue, SimpleButtonRed } from "./styles/Buttons.syles"
import { CreateForm } from "./styles/CreateForm.styles"

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
        console.log(formData)
    }
    const handleChange = (event) => {
        
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handleCheckChange = (event) => {
        const {name,checked} = event.target
        console.log(name +"  " + checked)
        setFormData( (prevState) => {
            const newState = {...prevState}
            newState.bodyParts[name] = checked
            return newState
        })
    }

  return props.popUp  ? (
    <CreateForm >
        <SimpleButtonRed onClick={() => props.setPopUp(false)}>Close</SimpleButtonRed>
        <form onSubmit={handleSubmit}>
            <h3>Create Exerciece </h3>
            <input name="name" value={formData.name} onChange={handleChange} maxLength="50" placeholder="Exerciece name..." />
            <textarea name="description" value={formData.description} onChange={handleChange} maxLength="252" placeholder="Description..."  />
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
            
            <SimpleButtonBlue type="Submit">Create</SimpleButtonBlue>
        </form>
        
    </CreateForm>
  ) : ""
}

export default CreateExerciseForm