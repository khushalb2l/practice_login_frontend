import React from 'react'

const Home = ({isLoggedIn,setIsLoggedIn}) => {
  
    const handleLogout=()=>{
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href='/';
    }
    const handleLogin=()=>{
        window.location.href='/login';
    }

    return (
    <div>
      {
        isLoggedIn ? (
        <div>
            <h1>welcome! You are logged in</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogout}>Logout</button>
        </div>    
        )
        :
        (
            <div>
                <h1>Welcome to homepage</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleLogin}>Login</button>
            </div>
        )
      }
    </div>
  )
}

export default Home
