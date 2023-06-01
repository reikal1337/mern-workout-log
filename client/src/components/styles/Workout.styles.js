import styled from "styled-components";

export const WorkoutStyled = styled.div`
    margin: 10px;
    min-width: 300px;
    
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

        word-break: break-all;
        white-space: normal;

        &:hover{
            color: red;
        }

        .icon-arrow{
            color: white;
            margin-left: 50px;
            margin-left: auto;
            font-size: 16px;
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
        max-height: 0;
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
        max-height: none;
    }
    form{
        margin: 12px;
        
    }

    input,select{
        padding: 2px 4px 2px 4px;
        border-radius: 10px;
        border: 2px inset #ccc;
        box-shadow: inset 1px 1px 10px 1px grey;
        font-size: .9rem;
        width: 150px;
    }
    select{
        margin-left: 7px;
        transition: ease 0.3s;
        &:focus{
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }
    }
    .select-lable{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .input-container{
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }
    .add-exercise-container{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-block: 15px;
    }
    .set-rep-container{
        margin-block: 7px;
        align-items: center;
        justify-content: center;
        display: flex;
        input{
            width: 50px;
        }
        label{
            margin: 7px;
        }
    }

`