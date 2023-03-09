import styled from "styled-components";


export const NavStyled = styled.nav`
    background-color: black;
    width: 100%;
    position: fixed;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        
        
    }
    #nav-logo{
        margin: 10px;
        margin-left: 50px;
        margin-right: auto;
        
    }
    #nav-logo > a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;

    }
    a{
        color: white;
    }
    div{
        display: flex;
        padding: 20px;
        margin-right: 4rem;
        a{
            font-size: 1.3rem;
            padding: 0.8rem;
            transition:  color ease 0.4s;
            &:hover{
                color: red;
            }
        }
    }
    .active{
        border-bottom: 2px solid red;
    }
    button{
        margin-right: 1rem;
        background-color: red;
        color: white;
        font-size: 1.3rem;
        border-radius: 5px;
        padding-inline: 1rem;
        padding-block: 0.7rem;
        transition: ease-in-out 0.3s;
        &:hover{
            border-radius: 12px;
        }
        &:focus{
            border-radius: 12px;
            color: black;

        }


    }
    
    img{
        width: 80px;
        margin-right: 10px;

    }


`