
import { ProfileStyled } from './styles/Profile.styles'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { SimpleButtonBlue } from '../components/styles/Buttons.syles'
import { changePassword, reset } from '../features/auth/authSlice'
import { Loading, Notification } from '../components'

function Profile() {
  const { user, isLoading, isSuccess, isError, message  } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
      oldPassword: "",
      password: "",
      repPassword: ""
})
  const [error,setError] = useState("")

  const dispatch = useDispatch()

  const badPassword = (errorMessage) => {
    setError(errorMessage)

    setFormData({
        oldPassword: "",
        password: "",
        repPassword: ""
      })
  }

const handleSubmit = (event) => {
  event.preventDefault()
  if(formData.password !== formData.repPassword){// should do all valadation
      badPassword("Passwords don't match!")

  }else if(formData.password.length > 100){
      badPassword("Password can't be longer then 100 char!")

  }else if(formData.password.length < 6){
      badPassword("Password can't be shorter then 6 char!")

  }else if(/\s/.test(formData.password)){
      badPassword("Password can't have any spaces!")
  }else if (user.username.toLowerCase() === formData.password.toLowerCase()){
      badPassword("Username and password can't match!")
  }else{
      const userData = {
        oldPassword: formData.oldPassword,
        newPassword: formData.password,

      }
      badPassword("")
      dispatch(changePassword(userData))
      dispatch(reset())
  }
}

const handleChange =  (event) => {
  setFormData({
      ...formData,
       [event.target.name]: event.target.value
      })
}

  if(isLoading){
    return <Loading size={"100"} speed={"4"} />
  }
  
  return (
    <ProfileStyled>
      <h2>Profile</h2> 

      {
        isError && message ? <Notification isBlue={false} text={message}/> :
        isSuccess && message ? <Notification isBlue={true} text={message}/> : ""
      }

      <div id='profile-container'>
        <h3>Hello, {user.username}</h3>
        <h4>Saved exercises: {user.exercisesNr}</h4>
        <h4>Workouts: {user.workoutsNr}</h4>
        <h4>Workout logs: {user.workoutLogsNr}</h4>
        <form onSubmit={handleSubmit}>
          <label><b>Change password</b></label>
          <label htmlFor="oldPassword">Old password: </label>
          <input type="password" id="oldPassword" name="oldPassword"
            value={formData.oldPassword} onChange={ handleChange}placeholder="Enter old password..."
            maxLength="100" minLength="6" />
          
          
          <label htmlFor="password">New password: </label>
          <input type="password" id="password" name="password"
            value={formData.password} onChange={handleChange} placeholder="Enter new passsword..."
            maxLength="100" minLength="6" />
          <span className="error-input">{error}</span>

          <label htmlFor="repPassword">Confirm new password: </label>
          <input type="password" id="repPassword" name="repPassword"
            value={formData.repPassword} onChange={handleChange} placeholder="Repeat new passsword..."
            maxLength="100" minLength="6" />
            <SimpleButtonBlue type='submit'>Change</SimpleButtonBlue>
        </form>
      </div>
    </ProfileStyled>
  )
}

export default Profile