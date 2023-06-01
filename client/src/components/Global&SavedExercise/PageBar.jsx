import { PageButton, PageButtonActive } from "../styles/Buttons.syles"
import { PageBarStyled } from "../styles/PageBar.style"
import { RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"
import { nanoid } from "@reduxjs/toolkit"


function PageBar(props) {

    const returnPageButtons = () => {
        const buttons = []
        for (let index = 1; index <= props.pageMax; index++) {
          if(index !== props.currentPage){
            buttons.push(
              <PageButton key={nanoid()} onClick={() => props.changeChange(index)} >{index}</PageButton>
            )
          }else{
            buttons.push(
              <PageButtonActive key={nanoid()} >{index}</PageButtonActive>
            )
          }
          
        }
        return buttons
      }
  return (
    <PageBarStyled>
        {props.currentPage !== 1 &&
            <RiArrowLeftSLine className="pageBar-arrows" onClick={ () => props.prevousPage()} />}
        {returnPageButtons()}
        {props.currentPage !== props.pageMax &&
            <RiArrowRightSLine className="pageBar-arrows" onClick={ () => props.nextPage()}/>}
    </PageBarStyled>
  )
}

export default PageBar