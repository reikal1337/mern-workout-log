import styled from "styled-components";
import { ExercisesStyled } from "./Exercises.style"

export const WorkoutLogsStyled = styled(ExercisesStyled)`

    form{
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;

        input,select{
            padding: 2px 4px 2px 4px;
            margin-bottom: 10px;
            border-radius: 10px;
            border: 2px inset #ccc;
            box-shadow: inset 1px 1px 10px 1px grey;
            font-size: .9rem;
            width: 150px;
        }

        select{
        margin-left: 7px;
        transition: ease 0.3s;
        &:focus{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
    }
    
`