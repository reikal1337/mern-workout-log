import { useState, useEffect } from "react"
import { MainStyled } from "./styles"
import { AuthButton } from "../components/styles/Buttons.syles"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice"
import { Loading } from "../components"
import { validateUsernameInput, validateUsername } from "../helpers/auth.helper"



function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const {username, password } = formData

    const [error, setError] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const{user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
            setError(prevState => prevState = message)
        }
        if(isSuccess || user) {
            navigate("/")
        }
        dispatch(reset())

    },[user, isError, isSuccess, message, navigate, dispatch])


    const handleSubmit = (event) => {
        event.preventDefault()
        if(validateUsername(username) !== ""){
            setError(prevState => prevState = validateUsername(username))
        }
        else{
            const userData = {
                username, password
            }
            dispatch(login(userData))
        }
        
        
    }

    const handleChange = (event) => {
        if(event.target.name === "username"){
            setError(prevState => prevState = validateUsernameInput(username))
        }
        setFormData({
            ...formData,
             [event.target.name]: event.target.value
            })
    }

    if(isLoading){
       return <Loading size={"100"} speed={"4"} />
    }

  return (
        <MainStyled>
            
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username: </label>
                <input type="text" id="username" name="username" value={username}
                 onChange={handleChange} maxLength="15" minLength="6" placeholder="Enter username..."/>
                <span className="error-input">{error}</span>

                <label htmlFor="password">Enter password: </label>
                <input type="password" id="password" name="password" value={password}
                 onChange={handleChange} maxLength="100" minLength="6" placeholder="Enter password..."/>
                <Link to="/register">Create new account</Link>
                <AuthButton>Log In</AuthButton>
            </form>
        </MainStyled>
  )
}

export default Login