import * as React from 'react';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';

function MyPass() {
    const [allPass, setPass] = React.useState([]);
    const [currentUser, setUser] = React.useState('');
    const [currUserInfo, setUserInfo] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            try {
                setUser(sessionStorage.getItem('currentUser'));
                const response = await fetch(process.env.REACT_APP_URL+"/mypass");

                if (response.status === 401) {
                    console.log("Unauthorized");
                    return;
                }

                const saveAll = await response.json();
                setPass(saveAll);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    React.useEffect(() => {
        function currentUserSession() {
            const currentUserInfo = allPass.filter(pass => pass.username.username === currentUser);
            setUserInfo(currentUserInfo);
        }

        currentUserSession();
    }, [allPass,currentUser]);

    return (
        <div className='mt-5'>
            <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
                <Table
                    stripe="odd"
                    hoverRow
                    sx={{ captionSide: 'top', '& tbody': { bgcolor: 'background.surface' } }}
                >
                    <caption>
                        <p className='text-center text-secondary'>
                            <strong>Hello {currentUser}, All your passwords are here</strong>
                        </p>
                    </caption>
                    <thead>
                        <tr>
                            <th style={{ width: '60%' }}>Application Name</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currUserInfo.map((row, index) => (
                            <tr key={index}>
                                <td>{row.passFor}</td>
                                <td>{row.newPass}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
        </div>
    );
}

export default MyPass;
