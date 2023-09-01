import reportWebVitals from './reportWebVitals';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import PageSelection from './comps/PageSelection.jsx'
import Redirect from "./comps/Redirect.jsx";
import NavBar from './comps/NavBar.jsx'
import Home from './comps/Home.jsx';
import Login from './comps/Login.jsx';
import Logout from './comps/Logout.jsx';
import MyPass from './comps/MyPass.jsx';
import SignUp from './comps/SignUp.jsx';
import ErrorPage from './comps/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: "/pwdgenerator/",
        element: sessionStorage.getItem('currentUser') ? <App /> : <Login />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/pwdgenerator/create",
                element: <Home />,
            },
            { 
                path: "/pwdgenerator/mypass",
                element: <MyPass />,
            }
        ]
    },
    {
        path: "/pwdgenerator/logout",
        element: <Logout />,
    },
    {
        path: "/pwdgenerator/signup",
        element: <SignUp />,
    },
    {
        path: "/pwdgenerator/login",
        element: <Login />,
    },
    
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
