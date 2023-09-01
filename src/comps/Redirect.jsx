import { useEffect, useState } from 'react';
import Error from './Error';
export default function Redirect() {
    const [loggedIn, setLogin] = useState('');
    useEffect(() => {
        function isLoggedIn() {
            setLogin(sessionStorage.getItem('currentUser'));
        }
        isLoggedIn();
    })
    return(
        <>
            {!loggedIn ? (
                <Error></Error>
            ): null}
        </>
    )
}