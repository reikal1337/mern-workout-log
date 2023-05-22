import styled from "styled-components";
import { ExercisesStyled } from "./Exercises.style"

export const ProfileStyled = styled(ExercisesStyled)`

    #profile-container{
        max-width: 400px;
        /* height: 400px; */
        background-color: white;
        border-radius: 10px;
        margin-top: 40px;
        padding: 15px;
        box-shadow: 1px 1px 10px 1px grey;
        h3{
            font-size: 20px;
            text-transform: capitalize;
        }
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-block: 10px;
            input{
                margin-bottom: 7px;
                /* margin-inline: 5px; */
                padding: 5px 10px 5px 10px;
                border-radius: 10px;
                border: 2px inset #ccc;
                box-shadow: inset 1px 1px 10px 1px grey;
            }
            span{
                font-size: 10px;
                color: red;
            }
        }
    }
`