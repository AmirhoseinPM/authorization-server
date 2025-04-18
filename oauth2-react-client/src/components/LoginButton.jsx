import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { generateCodeChallengeSimple, generateRandomString } from '../utils/authUtils';

const LoginButton = () => {
  const [codeVerifier, setCodeVerifier] = useState('');

  useEffect(() => {
    // تولید code_verifier هنگام بارگذاری کامپوننت
    const verifier = generateRandomString(64);
    setCodeVerifier(verifier);
    localStorage.setItem('code_verifier', verifier);
  }, []);

  const handleLogin = async () => {
    const clientId = 'auth-code-client';
    const redirectUri = encodeURIComponent('http://127.0.0.1:3000/callback');
    const scope = encodeURIComponent('read');
    const authServerUrl = 'http://localhost:8080/oauth2/authorize';
    
    // تولید code_challenge
    const codeChallenge = await generateCodeChallengeSimple(codeVerifier);
    // const state = generateRandomString(16);
    
    // localStorage.setItem('oauth_state', state);

    window.location.href = `${authServerUrl}` +
      `?response_type=code` +
      `&client_id=${clientId}` +
      `&redirect_uri=${redirectUri}` +
      `&scope=${scope}` +
    //   `&state=${state}` +
      `&code_challenge=oKq4meAb86nsEJzlFul9V7-iHB3-w5lGtnLFfunnfug` +
      // `&code_challenge=${codeChallenge}` +
      `&code_challenge_method=S256`;
  };

  return (
    <Button variant="contained" color="primary" onClick={handleLogin}>
      Login
    </Button>
  );
};

export default LoginButton;