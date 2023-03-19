import styled from "styled-components";

export const WorkoutStyled = styled.div`
    margin: 10px;
    .workout-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background-color: black;
        color: white;
        padding: 10px;
        border-radius: 10px;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover{
            color: red;
        }

        .icon-arrow{
            color: white;
            margin-left: 50px;
            transition: all 0.5s ease-out;
            
        }

        .activeicon{
            color: red;
            transform: rotate(180deg);
        }
    }

    .activetitle{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
            color: red;
        }
    
    
    .workout-content{
        max-height: 0px;
        overflow: hidden;
        transition: all 0.5s ease-out;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        .exercise-content{
            padding: 5px;
            h4{
                font-size: 0.9rem;
                
            }
            h6{
                text-align: center;
                margin-bottom: 10px;
                
            }
            div{
                display: flex;
                justify-content: space-around;
                margin: 5px;
            }
        }

        .button-container{
            margin: 10px;
            display: flex;
            justify-content: space-evenly;
            
        }
    }
    .active{
        transition: all 0.5s ease-out;
        max-height: 1000px; // need to find better solution... Maybe find height with refs...?
        overflow: hidden;
    }
    

`