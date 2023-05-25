import styled from "styled-components";
import { deviceSize } from "../../GlobalStyles.styles";

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
    /* max-width: 60px;
    max-height: 32px; */
    background-color: red;
    font-size: 16px;
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

export const LogOutButton = styled.button`
    margin-right: 16px;
    background-color: red;
    color: white;
    font-size: 21px;
    border-radius: 5px;
    padding-inline: 16px;
    padding-block: 11px;
    transition: ease-in-out 0.3s;
    &:hover{
        border-radius: 12px;
        color: black;
    }
    &:focus{
        border-radius: 12px;
        color: black;

    }

    @media ${deviceSize.desktop} {
        margin-right: 10px;
        font-size: 16px;
        border-radius: 10px;
        padding-inline: 13px;
        padding-block: 8px;
        
         
  }

  @media ${deviceSize.laptop} {
        margin-right: 5px;
        font-size: 14px;
        border-radius: 10px;
        padding-inline: 8px;
        padding-block: 4px;
        
         
  }


`

export const LogInButton = styled(LogOutButton)`
    background-color: #00a0dc;

`

