import styled from "styled-components";
import { WorkoutStyled } from "./Workout.styles";

export const WorkoutLogStyled = styled(WorkoutStyled)`
    .workoutlog-duration{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
        font-size: 20px;
        font-weight: 600;
    }
    
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