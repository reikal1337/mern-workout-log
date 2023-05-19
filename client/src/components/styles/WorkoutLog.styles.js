import styled from "styled-components";
import { WorkoutStyled } from "./Workout.styles";

export const WorkoutLogStyled = styled(WorkoutStyled)`
    .date-time-container{
        display: flex;
        justify-content: center; 
        align-items: center;
        flex-direction: column;
        margin-top: 15px;
        input{
            width: 120px;
            margin: 5px;
        }
    }

`