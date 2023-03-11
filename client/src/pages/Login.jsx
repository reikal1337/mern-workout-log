import { useState } from "react"
import { MainStyled } from "./styles"
import { AuthButton } from "../components/styles/Buttons.syles"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        Usr: ${username}\n
        Psw: ${password}\n`)
    }

  return (
        <MainStyled>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username: </label>
                <input type="text" id="username" value={username} onChange={ (e) => setUsername( e.target.value)}/> 
                {/* Redo with full seter */}

                <label htmlFor="password">Enter password: </label>
                <input type="password" id="password" value={password} onChange={ (e) => setPassword( e.target.value)}/>

                <AuthButton>Log In</AuthButton>
            </form>
        </MainStyled>
  )
}

export default Login