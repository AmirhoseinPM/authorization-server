import { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import axios from 'axios';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);
  console.log(localStorage.getItem('data'));


  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('access_token');
      setToken(token)
      console.log(token)
      try {
        const response = await axios.get('http://localhost:8000/api/product', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserInfo(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      {userInfo ? (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Products Information</Typography>
          <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </Box>
      ) : (
        <Typography>Loading products information...</Typography>
      )}
      <Box sx={{ mt: 3 }}>
          <Typography variant="h6">token: {token}</Typography>
        </Box>
      
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogout}
        sx={{ mt: 3 }}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;