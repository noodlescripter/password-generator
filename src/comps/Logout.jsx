import { useEffect } from 'react';
import Login from './Login.jsx'
import { useNavigate } from 'react-router-dom';
export default function Logout(){
    const naviagte = useNavigate();
    useEffect(() =>{
         function logout(){
            sessionStorage.removeItem('currentUser');
            window.location.href = 'login'
        }
        logout();
    });
}