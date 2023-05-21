
import { ProfileStyled } from './styles/Profile.styles'
import { useSelector } from 'react-redux'

function Profile() {
  const { user } = useSelector((state) => state.auth)
  
  return (
    <ProfileStyled>
      <div>{user.username}</div>
      <div>{user.exercisesNr}</div>
      <div>{user.workoutsNr}</div>
      <div>{user.workoutLogsNr}</div>

    </ProfileStyled>
  )
}

export default Profile