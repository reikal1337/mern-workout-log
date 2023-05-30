import styled from "styled-components"



export const PageBarStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    svg{//Arrow styles.
        font-size: 40px;
        cursor: pointer;
        transition: color ease 0.2s;
        &:hover{
            color: red;
        }

    }

`