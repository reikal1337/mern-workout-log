import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, reset } from "../features/auth/authSlice"
import { MainStyled } from "./styles"
import { AuthButton } from "../components/styles/Buttons.syles"
import { Loading } from "../components"

function Register() {

    const [error,setError] = useState({
        username: "",
        password: ""
    })

    const [formData,setFromData] = useState({
        username: "",
        password: "",
        repPassword: ""

    })
    const { username, password, repPassword} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            setError({
                ...error,
                urername: message
            })
        }

        if(isSuccess || user) {
            navigate("/")
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])

    const handleSubmit = (event) => {
        event.preventDefault()
        // alert(`
        // Usr: ${username}\n
        // Psw: ${password}\n
        // Rpsw: ${repPassword}`)
        if(password !== repPassword){// should do all valadation
            console.log("works lol!")
            setError({
                ...error,
                password: "Passwords don't match!"
            })
        }else{
            const userData = {
                username, password
            }
            dispatch(register(userData))
        }
    }

    const handleChange =  (event) => {
        setFromData({
            ...formData,
             [event.target.name]: event.target.value
            })
    }

    if(isLoading){
        <Loading />
    }

  return (
        <MainStyled>
            <div>Registration</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={handleChange} placeholder="Enter username..."/> 
                <span className="error-input">{error.username}</span>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password} onChange={ handleChange}placeholder="Enter password..."/>
                <span className="error-input">{error.password}</span>

                <label htmlFor="repPassword">Confirm password: </label>
                <input type="password" id="repPassword" name="repPassword" value={repPassword} onChange={handleChange} placeholder="Repeat passsword..."/> 

                <AuthButton>Register</AuthButton>
            </form>
        </MainStyled>
  )
}

export default Register