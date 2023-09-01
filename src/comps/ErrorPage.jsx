import { useRouteError, NavLink } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect } from "react";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);


    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
                <Container component="main" maxWidth="xs">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">The page you are looking for might not be there!!! or You need to <NavLink to='pwdgenerator/login'>login</NavLink></Alert>
                        </Stack>
                    </div>
                </Container>
            </Box>
        </>
    );
}