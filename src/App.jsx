import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import Protected from "./components/Protected";


const App=()=>{
  const checkToken= !!window.localStorage.getItem('token');
  const [isLoggedIn,setIsLoggedIn]=useState(checkToken);
  return <Router>
    <Routes>
      <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/protected" element={<Protected isLoggedIn={isLoggedIn} />} />
    </Routes>
  </Router>
  
}

export default App
