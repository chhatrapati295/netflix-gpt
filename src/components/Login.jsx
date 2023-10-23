import { useEffect, useRef, useState } from "react";
import BG_IMAGE from "../assets/netflix-bg.jpg";
import { FormValidation } from "../utils/Validate";
const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [validationMsg , setValidationMsg] = useState('')
  const email = useRef(null)
  const password = useRef(null)
  const username = useRef(null)
  useEffect(()=>{
    if(!isSignUpForm){
      email.current.focus()
    }
  },[isSignUpForm])

const handleBtnSubmit = (email  , password  , username)=>{
  const msg = FormValidation(email.current.value, password.current.value , isSignUpForm && username.current.value);
  setValidationMsg(msg)
  console.log(msg);
  // console.log(email , password)
}

  return (
    <div className="w-full relative h-full">
      <img src={BG_IMAGE} alt="" />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
      <form
        onSubmit={(e)=>e.preventDefault()}
        action=""
        className="flex flex-col gap-3  py-24 px-16 absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 rounded-md items-start justify-center  z-20 w-2/6  text-white m-auto "
      >
        <span className="text-2xl font-medium mb-4">
          {!isSignUpForm ? "Sign In" : "Sign Up"}
        </span>
        {isSignUpForm && (
          <input
            type="text"
            autoFocus
            placeholder="Full name"
            ref={username}
            required
            className="px-4 bg-[#3d3e3f]  py-2 outline-none w-full rounded-md border-none"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          required
          ref={email}
          className="px-4 bg-[#3d3e3f]  py-2 outline-none w-full rounded-md border-none"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          required
          className="px-4 py-2 bg-[#3d3e3f] outline-none  rounded-md w-full border-none"
        />
        <button onClick={()=>handleBtnSubmit(email,password , username)} className="p-2 outline-none bg-[#D9232E] hover:bg-[#e50914d4] transition-all rounded-md w-full border-none  font-medium">
          {!isSignUpForm ? "Sign In" : "Sign Up"}
        </button>
       <span className="text-[#D9232E] font-medium">{validationMsg}</span>
        <span>
          {!isSignUpForm ? "New to Netflix ? " : "Already a customer ? "}
          <span
            onClick={() => {
              setIsSignUpForm(!isSignUpForm)
              setValidationMsg('')
              email.current.value = null
              password.current.value = null
              username.current.value = null
            }}
            className="text-gray-400 underline cursor-pointer"
          >
            {!isSignUpForm ? "Sign Up now." : "Sign In now."}
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;
