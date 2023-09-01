import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Error() {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
                <Container component="main" maxWidth="xs">
                    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">Please <a href="/pwdgenerator/login"> Login</a></Alert>
                        </Stack>
                    </div>
                </Container>
            </Box>
        </>

    );
}
