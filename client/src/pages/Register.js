import { useState } from "react"
import { MainStyled } from "./styles/Register.styles"

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [repPassword, setRepPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        Usr: ${username}\n
        Psw: ${password}\n
        Rpsw: ${repPassword}`)
    }

  return (
        <MainStyled>
            <div>Registration</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username: </label>
                <input type="text" id="username" value={username} onChange={ (e) => setUsername( e.target.value)}/> 

                <label htmlFor="password">Enter password: </label>
                <input type="password" id="password" value={password} onChange={ (e) => setPassword( e.target.value)}/>

                <label htmlFor="repPassword">Repeat password: </label>
                <input type="password" id="repPassword" value={repPassword} onChange={ (e) => setRepPassword( e.target.value)}/> 

                <button>Register</button>
            </form>
        </MainStyled>
  )
}

export default Register