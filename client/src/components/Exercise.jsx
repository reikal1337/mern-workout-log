import { ExerciseStyled } from "./styles/Exercise.style"
import { SimpleButtonRed,  SimpleButtonBlue } from "./styles/Buttons.syles";
import { formatBodyParts } from "../helpers/util";

function Exercise(props) {

const returnRedButton = () =>{
  if(props.public){
    return (<SimpleButtonRed onClick={() => props.onSave(props._id)}>Save</SimpleButtonRed>)
  }else if(props.global && !props.public){
    return (<SimpleButtonRed onClick={() => props.onRemove(props._id)}>Remove</SimpleButtonRed>)
  }else if(!props.public){
    return (<SimpleButtonRed onClick={() => props.onDelete(props._id)}>Delete</SimpleButtonRed>)
  }
}

  return (
    <ExerciseStyled>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div id="span-container">
            <span>{formatBodyParts(props.bodyParts)}</span>
            {returnRedButton()}
            {!props.public && !props.published && !props.global ? 
              <SimpleButtonBlue onClick={() => props.onPublish(props._id)}>Publish</SimpleButtonBlue> : ""
          
            }
            <span>Creadet by: {props.createdBy}</span>
        </div>

    </ExerciseStyled>

  )
}

export default Exercise