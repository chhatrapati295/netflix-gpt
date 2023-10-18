import { useState } from 'react'
import BG_IMAGE from '../assets/netflix-bg.jpg'
const Login = () => {
  const [isSignUpForm , setIsSignUpForm] = useState(true)
  return (
    <div className='w-full relative h-full'>
        <img src={BG_IMAGE} alt="" />
        <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent'></div>
        <form action="" className="flex flex-col gap-3  py-24 px-16 absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 rounded-md items-start justify-center  z-20 w-2/6  text-white m-auto ">
          <span className="text-2xl font-medium mb-4">{!isSignUpForm ? 'Sign In' : 'Sign Up'}</span>
         {isSignUpForm && <input type="text" placeholder='Full name' required className="px-4 bg-[#3d3e3f]  py-2 outline-none w-full rounded-md border-none" />}
          <input type="text" placeholder='Email address' required autoFocus className="px-4 bg-[#3d3e3f]  py-2 outline-none w-full rounded-md border-none" />
          <input type="password" placeholder='Password' required className="px-4 mb-4 py-2 bg-[#3d3e3f] outline-none  rounded-md w-full border-none" />
          <button className="p-2 outline-none bg-[#D9232E] hover:bg-[#e50914d4] transition-all rounded-md w-full border-none  font-medium">{!isSignUpForm ? 'Sign In' : 'Sign Up'}</button>
          <span>{!isSignUpForm ? 'New to Netflix ? ' : 'Already a customer ? '}<span onClick={()=>setIsSignUpForm(!isSignUpForm)} className='text-gray-400 underline cursor-pointer'>{!isSignUpForm ? 'Sign Up now.' : 'Sign In now.'}</span></span>
        </form>
    </div>
  )
}

export default Login
