import styled from "styled-components";

export const StyledWorkoutExercise = styled.div`
    /* padding: 5px; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    border-bottom: 2px solid red;
    border-radius: 5px;
    .index-exit-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 5px;
        padding-inline: 5px;
        margin-bottom: 0px;
        
    }
    .workout-button-exercise-remove{
        border-radius: 15px;
        width: 20px;
        height: 20px;
        font-size: 10px;
        /* display: flex;
        align-self: flex-end; */
        margin: 5px;
        margin-bottom: 0;
    }
    h4{
        margin-top: 5px;
        font-size: 0.9rem;
        color: black;
    }
    h6{
        color: grey;
        margin-top: 5px;
        text-align: center;
        margin-bottom: 10px;
    }
    div{
       
        justify-content: space-around;
        margin-bottom: 7px;
    }
    span{
        margin-inline: 10px;
    }

`