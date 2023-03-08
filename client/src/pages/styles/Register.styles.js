import styled from "styled-components"
import backgroundImage from "../../assets/images/workout1.jpg"

export const MainStyled = styled.main`
    height: 100vh;
    width: 100vw;
    background-image: url(${backgroundImage});
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: 600;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba( 255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.04);
        padding: 20px;

    }
    label{
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 5px;
    }

    input{
        margin-bottom: 10px;
        padding: 5px 10px 5px 10px;
        font-size: 1.1rem;
        border-radius: 10px;
        border: 2px inset #ccc;
        box-shadow: inset 1px 1px 10px 1px grey;
    }

    button{
        background: rgba( 255, 255, 255, 0.15);
        backdrop-filter: blur(4px);
        box-shadow: 0 8px 50px black;   
        margin-top: 15px;
        font-size: 1.2rem;
        padding: 10px;
        border-radius: 10px;
        border: black;
        color: white;
        &:hover{
            box-shadow: inset 0 4px 5px black;
        }
        &:active{
            box-shadow: inset 0 8px 12px black;
        }

    }

`