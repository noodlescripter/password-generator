import NavBar from "./comps/NavBar.jsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
const navigate = useNavigate();
  
useEffect(() => {
  function redirect(url){
      if(sessionStorage.getItem('currentUser') && window.location.pathname === '/pwdgenerator/'){
        navigate(url)
      }
  }
  redirect('/pwdgenerator/create')
}, [])

  return (
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </>
  )
}

export default App
