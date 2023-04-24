import styled from "styled-components";

export const ExerciseStyled = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-inline: 20px;
    max-width: 600px;
    padding: 10px;
    border-radius: 10px;
    h3{
        font-size: .8rem;
        margin-block: 10px;
        text-transform: capitalize;
    }
    p{
        font-size: 0.6rem;
        padding-bottom: 5px;
        border-bottom: 2px solid red;
        border-radius: 5px;
        
        
    }
    #span-container{
        margin-top: 10px;
        width: 100%;
        display: flex;
        font-size: .5rem;
        justify-content: space-between;
    }
    span{
        /* flex-grow: 1; */
        flex-basis: 0;
    }
`