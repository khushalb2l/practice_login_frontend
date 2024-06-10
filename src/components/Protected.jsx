import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Protected = ({isLoggedIn}) => {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = window.localStorage.getItem("token");
        const response = await axios.get(`${BASE_URL}/api/v1/protected`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
      } catch (error) {
        console.log(error, "While fetching the protected page message!");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Protected Page</h1>
      <p>{message}</p>
    </div>
  );
};

export default Protected;
