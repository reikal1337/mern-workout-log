import styled from "styled-components";

export const CreateForm = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    
    #button-exit{
        border-radius: 15px;
        padding: 5px;
        width: 30px;
        margin-left: auto;
        }
    form{
        display: flex;
        flex-direction:column;
        
        position: relative;
        background: white;
        border-radius: 10px;
        width: 320px;
        padding: 20px;

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

`
