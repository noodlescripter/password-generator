import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Outlet, redirect, NavLink } from 'react-router-dom';
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://noodlesripter.com/">
                @noodlescripter
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Login() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loggedIn, setLogin] = React.useState(true);
    const navigation = useNavigate();
    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const login = async function () {
        const res = await fetch(process.env.REACT_APP_URL+"/login", {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        if (res.ok) {
            console.log('Logged in');
            const userdata = await res.json();
            sessionStorage.setItem('currentUser', userdata.username);
            window.location.href = '/pwdgenerator/create'
        } else {
            setLogin(false)
        }
        
    }

    function handleSignUp(){
        window.location.href = 'pwdgenerator/signup'
    }

    return (
        <>
            
            <div className='container text-center mt-3'>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <div className='mb-3 text-center'>
                            <h1>Login</h1>
                        </div>
                        {!loggedIn ? (
                            <div className='mt-2 text-center text-danger'>
                                <p>Failed Login!!</p>
                            </div>
                        ) : null}

                        <Box noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="User Name"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={handleUsername}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePassword}
                            />

                            <Button

                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                disabled={!username || !password}
                                onClick={login}
                            >
                                Sign In
                            </Button>
                            
                            <div className='text-center'>
                                <NavLink to='/pwdgenerator/signup'>Don't have an account? Sign Up</NavLink>
                            </div>

                            {/* <Link variant="body2" onClick={handleSignUp}>
                                <div className='text-center'>
                                    Don't have an account? Sign Up
                                </div>
                            </Link> */}
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                    <Outlet />
                </Container>
                
            </div>

        </>
    )
}
