import React, { useState,useEffect } from 'react'
import axios from "axios"

const BASE_URL=import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL);
const Login = ({isLoggedIn,setIsLoggedIn}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    
      // Redirect to home if already logged in
      // if (isLoggedIn) {
      //   return window.location.href = '/';
      // }


    const handleLogin=async()=>{
        try{
            const response=await axios.post(`${BASE_URL}/api/v1/login`,{email,password});
            const {token}=response.data;
            console.log(token);
            localStorage.setItem('token',token);
            setIsLoggedIn(true);
            window.location.href='/';
        }
        catch(error){
            console.log("error while loggin");
        }
    }

    return (
    <div>
      <h2>Welcome to Login page!</h2>
      <input placeholder='Enter Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder='Enter Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
