import { ExerciseStyled } from "../styles/Exercise.style"
import { SimpleButtonRed,  SimpleButtonBlue } from "../styles/Buttons.syles";
import { formatBodyParts } from "../../helpers/util";

function Exercise(props) {

const returnRedButton = () =>{
  if(props.public){
    return (<SimpleButtonRed className="centerButton" onClick={() => props.onSave(props._id)}>Save</SimpleButtonRed>)
  }else if(props.global && !props.public){
    return (<SimpleButtonRed className="centerButton" onClick={() => props.onRemove(props._id)}>Remove</SimpleButtonRed>)
  }else if(!props.public){
    return (<SimpleButtonRed className="centerButton" onClick={() => props.onDelete(props._id)}>Delete</SimpleButtonRed>)
  }
}

  return (
    <ExerciseStyled>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="exercise-footer">
            <span className="exercise-footer-bodyparts">{formatBodyParts(props.bodyParts)}</span>
            {returnRedButton()}
            {!props.public && !props.published && !props.global ? 
              <SimpleButtonBlue className="centerButton" onClick={() => props.onPublish(props._id)}>Publish</SimpleButtonBlue> : ""
          
            }
            <span className="exercise-footer-item-createdby">Creadet by: {props.createdBy}</span>
        </div>

    </ExerciseStyled>

  )
}

export default Exercise