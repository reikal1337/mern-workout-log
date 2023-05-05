import { ExerciseStyled } from "./styles/Exercise.style"
import { SimpleButtonRed,  SimpleButtonBlue } from "./styles/Buttons.syles";

function Exercise(props) {

  const returnBodyParts = (array) => {
    let result = ""
    
    array.map( item => {
      result += item.charAt(0).toUpperCase() + item.slice(1) + "/"
  })
  return result.slice(0,-1)
}

  return (
    <ExerciseStyled>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div id="span-container">
            <span>{returnBodyParts(props.bodyParts)}</span>
            {props.public ?
              <SimpleButtonRed>Save</SimpleButtonRed>:
            <SimpleButtonRed onClick={() => props.onRemove(props._id)}>Remove</SimpleButtonRed>}
            {!props.public && !props.published ? 
              <SimpleButtonBlue onClick={() => props.onPublish(props._id)}>Publish</SimpleButtonBlue> : ""
          
            }
            <span>Creadet by: {props.createdBy}</span>
        </div>

    </ExerciseStyled>

  )
}

export default Exercise