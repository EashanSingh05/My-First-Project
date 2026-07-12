import { redirect, useNavigate , Navigate } from "react-router-dom";

export const isTokenValid = () => {
    const token = localStorage.getItem('token');
    
    return token ? redirect('/dashboard') : redirect('/auth');
  };
  

