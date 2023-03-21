import { useState, useEffect } from "react"
import { MainStyled } from "./styles"
import { AuthButton } from "../components/styles/Buttons.syles"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login, reset } from "../features/auth/authSlice"
import { Loading } from "../components"


function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const {username, password } = formData

    const [error, setError] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const{user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError){
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

        const userData = {
            username, password
        }
        dispatch(login(userData))
        
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    if(isLoading){
       return <Loading />
    }

  return (
        <MainStyled>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username: </label>
                <input type="text" id="username" name="username" value={username} onChange={handleChange}/> 

                <label htmlFor="password">Enter password: </label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange}/>

                <AuthButton>Log In</AuthButton>
            </form>
        </MainStyled>
  )
}

export default Login