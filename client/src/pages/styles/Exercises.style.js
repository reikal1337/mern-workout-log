import styled from "styled-components";

export const ExercisesStyled = styled.section`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    #limit-form{
        margin-block: 10px;
        select{
            padding: 1px;
            border-radius: 10px;
            border: 2px inset #ccc;
            box-shadow: inset 1px 1px 10px 1px grey;
            font-size: 14.4px;
            width: 50px;
        }

        select{
        transition: ease 0.3s;
        &:focus{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            }
        }
    }

    h2{
        
        font-size: 24px;
        margin-block: 10px 5px;
        font-weight: 800;
    }
    h4{
        margin-top: 20px;
        font-size: 21px;
        color: grey;
    }

`