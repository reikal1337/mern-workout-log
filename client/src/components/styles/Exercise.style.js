import styled from "styled-components";
import { deviceSize } from "../../GlobalStyles.styles";

export const ExerciseStyled = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    max-width: 600px;
    
    padding: 10px;
    border-radius: 10px;
   
    
    h3{
        width: 100%;
        font-size: 18px;
        margin-block: 10px;
        text-transform: capitalize;
        text-align: center;
        width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        
    }

    p{
        font-size: 14px;
        padding-bottom: 5px;
        margin-bottom: 10px;
        border-bottom: 2px solid red;
        border-radius: 5px;

        width: 100%;
        word-wrap: break-word;
        overflow-wrap: break-word;
        
    }
    
    .exercise-footer{
        margin-top: 10px;
        width: 100%;
        font-size: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1;
        .centerButton{
            display: flex;
            justify-self: center;
            align-self: center;
            max-width: 70px;
            max-height: 35px;
            margin: 5px;
            
        }
        .button-container{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .exercise-footer-bodyparts{
            display: flex;
            justify-self: flex-start;
            align-self: center;
            
            
        }
        .exercise-footer-createdby{
            display: flex;
            justify-self: flex-end;
            align-self: center;
            
        }
    }

    @media ${deviceSize.tablet} {
        
        .exercise-footer{
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            .button-container{
                grid-row: 2 ;
                grid-column: 2;
            }
            .exercise-footer-bodyparts{
                grid-row: 1;
                grid-column: span 2;
                
            }
            .exercise-footer-createdby{
                grid-row: 1;
                grid-column: 3;
            }
        
        }
    }

    @media ${deviceSize.mobileL} {
        .exercise-footer{
            font-size: 8px;
        }
        h3{
            font-size: 16px;
            
        }
        p{
            font-size: 12px;
        }
    }
    
`