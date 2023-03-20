import { BiLoaderCircle } from "react-icons/bi"
import styled from "styled-components"

function Loading() {
  return (
    <Spiner>
        <BiLoaderCircle id="loading-icon"/>
    </Spiner>
    
  )
}

export default Loading

const Spiner = styled.div`


`