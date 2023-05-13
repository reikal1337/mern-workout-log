import React from 'react'
import { NotificationBlue, NotificationRed } from './styles/Notification.styles'
import {AiFillCloseCircle, AiFillCheckCircle} from "react-icons/ai"
import ReactDom from "react-dom"

function Notification(props) {

  return ReactDom.createPortal(

    <>
    {
      props.isBlue ? 
      <NotificationBlue> <AiFillCheckCircle className='notification-icon'/>{props.text}</NotificationBlue>
      : 
      <NotificationRed> <AiFillCloseCircle className='notification-icon'/>{props.text}</NotificationRed>
    }
    </>,
    document.getElementById("root")
  )
  
}

export default Notification