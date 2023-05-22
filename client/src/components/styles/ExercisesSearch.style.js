import styled from "styled-components";

export const SerachStyled = styled.form`
    input,select{
        padding: 2px 4px 2px 4px;
        border-radius: 10px;
        border: 2px inset #ccc;
        box-shadow: inset 1px 1px 10px 1px grey;
        margin-right: 7px;
        font-size: .9rem;
    }
    select{
        transition: ease 0.3s;
        &:focus{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
    input{
        width: 150px;
    }
    button{
        border: 2px inset #ccc;
        font-size: 16px;
        border-radius: 5px;
        padding: 2px 4px;
        cursor: pointer;
        transition: border-radius 0.3s ;
        &:hover,&:focus{
            border-radius: 15px;
        }
    }

`