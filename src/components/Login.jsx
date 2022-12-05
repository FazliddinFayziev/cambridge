import { useContext, useEffect } from 'react'
import {FcGoogle} from "react-icons/fc";
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import { AuthContext } from '../context/AuthContex'
import { Logo } from '../assets/img';

const Login = () => {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser) {
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
    <div className='w-screen h-screen flex justify-center items-center text-semibold text-black'>
      <div className='border-[1px] border-black p-6 shadow-2xl'>
            <div className='flex items-center justify-center my-5'>
              <img src={Logo} alt="" className='w-[100px] h-[70px]' />
            </div>
            <div className='border-2 border-black my-5'>
              <div className='border-2 border-black'>
                <div className='flex bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
                  <div className='ml-0 py-2 px-2 border-2 border-black'>
                    <FcGoogle className='' size={30}/> 
                  </div>
                  <button className="p-2 ml-[1px] font-sans font-semibold w-full  border-2 border-black" onClick={signIn}>
                    <span className='font-mono'>Login with</span> <span className='font-serif'>Google</span>
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Login
