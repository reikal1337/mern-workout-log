import { ExerciseStyled } from "./styles/Exercise.style"
import { SimpleButtonRed,  SimpleButtonBlue } from "./styles/Buttons.syles";

function Exercise(props) {
  console.log(props)
  return (
    <ExerciseStyled>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div id="span-container">
            <span>{props.bodyParts.toString()}</span>
            <SimpleButtonRed>{props.public ? "Save" : "Remove"}</SimpleButtonRed>
            {!props.public ? 
              <SimpleButtonBlue>Publish</SimpleButtonBlue> : ""
          
            }
            <span>Creadet by: {props.createdBy}</span>
        </div>

    </ExerciseStyled>

  )
}

export default Exercise