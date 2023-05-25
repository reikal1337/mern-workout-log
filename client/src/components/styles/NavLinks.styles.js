import styled, { keyframes } from "styled-components";
import { deviceSize } from "../../GlobalStyles.styles";


export const NavLinksDeskStyled = styled.div`
    display: flex;
    align-items: center;
    li{
        padding: 13px;
        text-align: center;
        a{
        color: white;
        font-size: 25px;
        /* padding: 13px; */
        transition: color ease 0.4s;
        &:hover{
            color: red;
        }
    }
    }
    
    .active{
        border-bottom: 2px solid red;
        #navbar-profile-icon{
            color: red;
        }
    }

    @media ${deviceSize.desktop} {
        li{
            a{
                font-size: 18px;
            }
        }
    }

    @media ${deviceSize.laptop} {
        li{
            a{
                font-size: 16px;
            }
        }
    }

    @media ${deviceSize.customS} {
        display: none;
    }
`

export const NavLinksMobStyled = styled.div`
    display: none;
    #mobile-link-container{
        position: absolute;
        top: 70px;
        right: 10%;
        flex-direction: column;
        background-color: black;
        opacity: 0.8;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .active{
            border-bottom: 2px solid red;
        }
        
        li{
            margin-block: 20px;
            margin-inline: 20px;
            a {
                color: white;
                font-size: 20px;
                transition: color ease 0.4s;
                &:hover{
                    color: red;
                }
            }
    }
    }
    
    #ham-menu, #mobile-close-icon{
        font-size: 35px;
        color: white;
        cursor: pointer;
        transition: color ease 0.4s;
        &:hover{
            color: red;
        }
        &:active{
            color: red;
        }
    }

    #mobile-close-icon{
        color: red;
        &:hover{
            color: white;
        }
        &:active{
            color: white;
        }
        }

    
    @media ${deviceSize.customS} {
        display: flex;
        #mobile-link-container{
            
        }
        
    }

`