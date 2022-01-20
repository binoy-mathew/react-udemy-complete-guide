import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
    const ctx = useContext(AuthContext);
    //const [isLoggedIn, setIsLoggedIn] = useState(false); Commented after moving to central context component

    /*
    useEffect will run AFTER every component re-evaluation. That is, after the App function runs, the useEffect() will run.
    Additionally, it will only run if the dependencies listed in the array parameter have changed.
    If the array is left as empty, it will run only the first time that the component is rendered.
    */

    /* *** Commented after moving to central context component
    useEffect(() => {
        const storedUserLoggedInInformation =
            localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);
    */

    /* *** Commented after moving to central context component
    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };
    */

    /*  *** Commented after moving to central context component
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    */

    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </React.Fragment>
    );
}

export default App;
