import styled from "styled-components";

export const FooterStyled = styled.footer`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        width: 100%;
        background-color: black;
        color: white;
        height: 50px;
        padding-bottom: 5px;
        


    a{
        color: white;
        margin-left: 5px;
        font-size: 10px;
        text-decoration: wavy underline;
        transition: color 0.3s ease;
        
        &:hover{
            color: red;
            
        }
    }

`