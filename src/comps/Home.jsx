import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300, // Adjust modal width
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function PasswordGenerator() {
  const [passFor, setPassFor] = useState('');
  const [passL, setPassL] = useState('');
  const [gPassword, setGPassWord] = useState('');
  const [open, setOpen] = useState(false);
  const [maxNum , setMaxNum] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
        setOpen(false)
    }, 5000);
  };
  const handleClose = () => setOpen(false);
    
  const handlePassFor = (event) => {
    setPassFor(event.target.value);
  };

  const handlePassL = (event) => {
    setPassL(event.target.value);
  };

  function generateRandomString(length) {
    
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?';
    let randomString = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }

    return randomString;
  }

  async function addNewPass(sNewPass) {
    let newPassData = await fetch(process.env.REACT_APP_URL+"/mypass/new" ,
        {
            method: 'POST',
            body: JSON.stringify({ passFor: passFor, newPass: sNewPass, username: sessionStorage.getItem('currentUser') }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    await newPassData.json();
}

  async function renderData() {
    const newPass = generateRandomString(passL);
    setGPassWord(newPass);
    handleOpen();
    addNewPass(newPass);
    setPassFor('');
    setPassL('');
  }

  

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Container component="main" maxWidth="xs">
        <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
          <div className="mt-3">
            <Input
              type="text"
              variant="outlined"
              placeholder="Password For"
              name="passFor"
              onChange={handlePassFor}
              fullWidth
            />
          </div>
          <div className="mt-3">
            <Input
              variant="outlined"
              placeholder="Length Of Password"
              name="passL"
              type="number"
              onChange={handlePassL}
              fullWidth
            />
          </div>
          <div className="mt-3">
            <Button variant="contained" onClick={renderData} 
            disabled = {!passFor || !passL || passFor.length > 20 || passL > 15}
            >
              Generate Password
            </Button>
          </div>

          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography variant="h6" component="h2">
                  Your Password Below
                </Typography>
                <Typography sx={{ mt: 2 }}>{gPassword}</Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default PasswordGenerator;
