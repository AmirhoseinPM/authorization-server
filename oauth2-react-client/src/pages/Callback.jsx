import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Typography, CircularProgress, Box } from '@mui/material';

const Callback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const exchangeCodeForToken = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      // const state = params.get('state');
      const error = params.get('error');
      
      // بررسی خطاها
      if (error) {
        console.error('OAuth error:', params.get('error_description'));
        navigate('/login');
        return;
      }

      if (!code 
        // || !state
      ) {
        navigate('/login');
        return;
      }

     // اعتبارسنجی state
      // const savedState = localStorage.getItem('oauth_state');
      // if (state !== savedState) {
      //   console.error('State mismatch');
      //   navigate('/login');
      //   return;
      // }

      try {
        const codeVerifier = localStorage.getItem('code_verifier');
        console.log(code)
        const response = await axios.post('http://localhost:8080/oauth2/token', {
          grant_type: 'authorization_code',
          code: code,
          scope: 'read',
          redirect_uri: 'http://127.0.0.1:3000/callback',
          // client_id: 'auth-code-client',
        //   client_secret: 'secret',
          code_verifier: 'XaAWFTM8qY0hCHb0TMSJNiNL9Za_k7i2Z1Og3ypCd-789VcscGfTaO4bazEX5yxvUEcKTFDPD-ZdMl-QX8rWPedZWiy31PPXHwXQ1zyTmct4WUKjvh0YbhHkbJ7j80fL'
        }, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }, 
          auth: {
            username: 'auth-code-client',
            password: 'secret'
          }
        });
        console.log(response.data);
        localStorage.setItem('dara', response.data);
        localStorage.setItem('access_token', response.data.access_token);
        
        // پاکسازی مقادیر موقت
        localStorage.removeItem('code_verifier');
        // localStorage.removeItem('oauth_state');
        
        navigate('/dashboard');
      } catch (error) {
        console.error('Error exchanging code for token:', error.response?.data || error.message);
        // navigate('/login');
      }
    };

    exchangeCodeForToken();
  }, [navigate, location.search]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Authenticating...
      </Typography>
    </Box>
  );
};

export default Callback;