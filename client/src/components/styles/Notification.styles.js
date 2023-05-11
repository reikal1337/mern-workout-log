import styled, { keyframes } from "styled-components";


const animation = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-50px);
    }
    10%{
        opacity: 1;
        transform: translateY(0);
    }
    90%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`


export const NotificationBlue = styled.div`
    background-color: black;
    max-width: 300px;
    max-height: 50px;
    padding: 15px;
    color: #00a0dc;
    position: fixed;
    right: 0;
    top: 110px; // Nav bar height, need better solution :/
    border-bottom-left-radius: 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    
    animation: ${animation} 8s forwards;
    .notification-icon{
        font-size: 25px;
        margin-right: 5px;
        

    }

`

export const NotificationRed = styled(NotificationBlue)`
    color: red;

`

