import { useEffect } from 'react';


const RedirectComponent = () => {
    const history = useHistory();

    useEffect(() => {
        if (window.location.pathname === '/') {
            window.location.href = 'app/create'
        }
    }, [history]);
};

export default RedirectComponent;