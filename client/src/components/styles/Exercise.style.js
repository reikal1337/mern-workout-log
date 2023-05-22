import styled from "styled-components";

export const ExerciseStyled = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 12px;
    max-width: 600px;
    padding: 10px;
    border-radius: 10px;
    
    h3{
        font-size: 18px;
        margin-block: 10px;
        text-transform: capitalize;
    }
    p{
        font-size: 14px;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 2px solid red;
        border-radius: 5px;
        
    }
    .exercise-footer{
        margin-top: 10px;
        width: 100%;
        font-size: 10px;
        /* display: flex;
        justify-content: space-between; */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        .centerButton{
            display: flex;
            justify-self: center;
            align-self: center;
            max-width: 60px;
            max-height: 30px;
            
        }
        .exercise-footer-bodyparts{
            display: flex;
            justify-self: flex-start;
            align-self: center;
        }
        .exercise-footer-item-createdby{
            display: flex;
            justify-self: flex-end;
            align-self: center;
        }
    }
    
`