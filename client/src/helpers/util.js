import { useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const formatBodyParts = (array) => {
    let result = ""
    // console.log()
    // console.log(array)
    array.forEach( item => {
      result += item.charAt(0).toUpperCase() + item.slice(1) + "/"
  })
  return result.slice(0,-1)
}

export const useCheckIfLogIn = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  useEffect( () => {
    if(!user){
      navigate("/login")
    }
    
  },[user,navigate])
}

