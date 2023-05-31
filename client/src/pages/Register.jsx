import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, reset } from "../features/auth/authSlice"
import { MainStyled } from "./styles"
import { AuthButton } from "../components/styles/Buttons.syles"
import { Loading } from "../components"
import { validateUsernameInput, validateUsername } from "../helpers/auth.helper"

function Register() {

    const [error,setError] = useState({
        username: "",
        password: ""
    })

    const [formData,setFormData] = useState({
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
            setError( () => ({
                username: message,
                password: ""
            }))
        }

        if(isSuccess || user) {
            navigate("/login")
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])

    const badPassword = (errorMessage) => {
        setError({
            ...error,
            password: errorMessage
        })
        setFormData({
            ...formData,
             password: "",
             repPassword: ""
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(validateUsername(username) !== ""){
            setError({
                ...error,
                username: validateUsername(username)
            })
        }else if(password !== repPassword){// should do all valadation
            badPassword("Passwords don't match!")

        }else if(password.length > 100){
            badPassword("Password can't be longer then 100 char!")

        }else if(password.length < 6){
            badPassword("Password can't be shorter then 6 char!")

        }else if(/\s/.test(password)){
            badPassword("Password can't have any spaces!")
        }else if (username.toLowerCase() === password.toLowerCase()){
            badPassword("Username and password can't match!")
        }else{
            const userData = {
                username, password
            }
            dispatch(register(userData))
        }
    }

    const handleChange =  (event) => {
        if(event.target.name === "username"){
            setError({
                ...error,
                username: validateUsernameInput(username)
            })
        }
        setFormData({
            ...formData,
             [event.target.name]: event.target.value
            })
    }


    if(isLoading){
        return  <Loading size={"100"} speed={"4"} />
       
    }

  return (
        <MainStyled>
            <div>Registration</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" >Username: </label>
                <input type="text" id="username" name="username"
                 value={username} onChange={handleChange} placeholder="Enter username..."
                 maxLength="15" minLength="6" /> 
                <span className="error-input">{error.username}</span>

                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"
                 value={password} onChange={ handleChange}placeholder="Enter password..."
                 maxLength="100" minLength="6" />
                <span className="error-input">{error.password}</span>

                <label htmlFor="repPassword">Confirm password: </label>
                <input type="password" id="repPassword" name="repPassword"
                 value={repPassword} onChange={handleChange} placeholder="Repeat passsword..."
                 maxLength="100" minLength="6" /> 

                <AuthButton>Register</AuthButton>
            </form>
        </MainStyled>
  )
}


export default Register


