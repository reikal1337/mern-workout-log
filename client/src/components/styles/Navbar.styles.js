import styled from "styled-components";
import { deviceSize } from "../../GlobalStyles.styles";


export const NavStyled = styled.nav`
    background-color: black;
    width: 100%;
    position: sticky;
    top: 0;

    ul{
        display: flex;
        justify-content: center;
        align-items: center;

        #nav-logo{
            margin: 10px;
            /* margin-left: 50px; */
            margin-right: auto;
        }

        #nav-logo > a{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 21px;
            color: white;
            transition: color ease 0.4s;
            &:hover{
                color: red;
            }
        }

        #profile-nav{
            text-align: center;
            text-transform: capitalize;
            margin: 5px;
            margin-right: 12px;
            margin-left: 50px;
            
            a{
                font-size: 18px;
                color: white;
                transition: color ease 0.4s;
                &:hover{
                    color: red;
                }
            }
            .active{
                border-bottom: 2px solid red;
                #navbar-profile-icon{
                    color: red;
                }
                
            }
            #navbar-profile-icon{
                margin-right: 10px;
                font-size: 20px;
            }
        }

    }

    
    
    img{
        width: 80px;
        margin-right: 10px;

    }


    @media ${deviceSize.desktop} {
        ul{
            img{
                width: 60px;
                height: 60px;
            }
            #nav-logo > a{
                font-size: 16px;

            }
            #profile-nav{
                margin-left: 40px;
            }
        }
        
         
  }

  @media ${deviceSize.laptop} {
        
        ul{
            img{
                width: 50px;
                height: 50px;
            }
            #nav-logo > a{
                font-size: 14px;

            }
            #profile-nav{
                margin-left: 20px;
                margin-right: 5px;
            }
        }
  }

  @media ${deviceSize.mobileL} {
        ul{
            #profile-nav{
            margin-left: 10px;
            margin-right: 5px;
            .active{
                border: none;
            }
            a{
                span{
                    display: none;
                }
            }
            
            }
        }
    }

    @media ${deviceSize.mobileM} {
        ul{
            h1{
                display: none;
            }
        }
    }

`


