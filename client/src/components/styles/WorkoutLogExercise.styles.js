import styled from "styled-components";
import { StyledWorkoutExercise } from "./WorkoutExercise.style";
import { deviceSize } from "../../GlobalStyles.styles";

export const StyledWorkoutLogExerciese = styled(StyledWorkoutExercise)`

    word-break: break-all;
    white-space: normal;

    .sets-container{
        word-break: break-all;
        white-space: normal;
        margin-top: 5px;
        input{
            width: 50px;
        }
        label{
            margin: 7px;
            
        }
        
    }

    @media ${deviceSize.mobileL} {
        .sets-container{
            input{
                width: 30px;
                font-size: 10px;
            }
            label{
                margin: 4px;
                
            }
        }
    }

`