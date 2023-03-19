import styled from "styled-components";

export const CreateForm = styled.div`
    #create-popup-background{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
        background-color: rgba(255, 255, 255, 0.8);
    }
    
    #form-container{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        
        form{
            display: flex;
            flex-direction:column;
            
            position: relative;
            background: white;
            border-radius: 10px;
            width: 320px;
            padding: 20px;

            #button-exit{
            border-radius: 15px;
            padding: 5px;
            width: 30px;
            margin-left: auto;
            }

            h3{
                text-align: center;
                margin-bottom: 10px;

            }
            input,textarea{
                padding: 2px 4px 2px 4px;
                border-radius: 10px;
                border: 2px inset #ccc;
                box-shadow: inset 1px 1px 10px 1px grey;
                margin-right: 7px;
                font-size: .9rem;
                
            }
            
            textarea{
                resize: none;
                height: 180px;
                margin-block: 10px;
            }
            div{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                margin-block: 10px;
            }
            
        }
    }

`
