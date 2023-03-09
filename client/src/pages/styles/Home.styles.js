import styled, { keyframes } from "styled-components";

const animationGradiant = keyframes`
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }

`



export const SectionStyled = styled.section`
    display: flex;
    ul{
        height: 100vh;
        width: 40vw;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgb(0,0,0) 0%, rgb(4,15,17) 100%);
        border-right: 4px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        li{
            padding: 1.5rem;
            font-size: 20px;
            font-weight: 600;
            text-transform: capitalize;

            background-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(193,1,20,1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 400%;
            animation: ${animationGradiant} 4s infinite alternate ;
        }
    }
    


    img{
        height: 100vh;
        width: 60vw;
        object-fit: cover;
    }
`