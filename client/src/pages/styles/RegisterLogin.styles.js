import styled from "styled-components"
import backgroundImage from "../../assets/images/workout1.jpg"

export const MainStyled = styled.main`
    height: 100vh; //  change vh and make background with "cover"
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
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.40);
        border: 1px solid rgba(255, 255, 255, 0.1);
        
        padding: 20px;
    }
    label{
        font-size: 1.3rem;
        font-weight: 400;
        margin-bottom: 5px;
    }
    span{
        font-size: 0.7rem;
        color: red;
    }

    input{
        margin-bottom: 10px;
        padding: 5px 10px 5px 10px;
        font-size: 1.1rem;
        border-radius: 10px;
        border: 2px inset #ccc;
        box-shadow: inset 1px 1px 10px 1px grey;
    }
`