import styled from "styled-components";

export const AuthButton = styled.button`
    background: rgba( 255, 255, 255, 0.075);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    margin-top: 15px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 10px;
    border: black;
    color: white;
    transition: ease 0.3s;
    &:hover{
        box-shadow: inset 0 4px 5px black;
        color: red;
    }
    &:focus{
        box-shadow: inset 0 8px 12px black;
        color: red;
    }
`

export const SimpleButtonRed = styled.button`
    background-color: red;
    font-size: 1rem;
    padding: 5px;
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    transition: ease 0.3s;
    &:hover,&:focus{
        color: black;
        border-radius: 12px;
    }

`

export const SimpleButtonBlue = styled(SimpleButtonRed)`
    background-color: #00a0dc;

`

