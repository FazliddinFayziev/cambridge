import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import { AuthContext } from '../context/AuthContex'

const Login = () => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser)

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      navigate('/')
    }
  }, [currentUser])

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result)
      })
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        GoogleAuthProvider.credentialFromError(error)
        console.error(error)
      })
  }
  return (
    <div>
      <button onClick={signIn}>Login</button>
    </div>
  )
}

export default Login
