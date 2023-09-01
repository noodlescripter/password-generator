import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import MyPass from './MyPass.jsx';
import SignUp from './SignUp.jsx';
import Error from './Error.jsx';


export default function PageSelection() {
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        setCurrentUser(sessionStorage.getItem('currentUser'));
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {currentUser ? (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/mypass" element={<MyPass />} />
                        <Route path="/logout" element={<Logout />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                    </>
                )}
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}
