import { BiLoaderCircle } from "react-icons/bi"
import styled, { keyframes } from "styled-components"

function Loading(props) {
  return (
    <Spiner size={props.size} speed={props.speed}>
        <BiLoaderCircle className="loading-icon"/>
    </Spiner>
    
  )
}

export default Loading

const spinerAnimation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }


`


const Spiner = styled.div`
  .loading-icon{
    font-size: ${props => props.size}px;
    animation: ${spinerAnimation} ${props => props.speed}s linear 0s infinite forwards ;
  }

`