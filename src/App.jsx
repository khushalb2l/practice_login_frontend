import { useState } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Protected from "./components/Protected";

const App = () => {
  const checkToken = !!window?.localStorage?.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(checkToken);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route
        path="/protected"
        element={<Protected isLoggedIn={isLoggedIn} />}
      />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

export default App;
