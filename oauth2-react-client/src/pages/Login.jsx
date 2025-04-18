import { Container, Box, Typography } from '@mui/material';
import LoginButton from '../components/LoginButton';

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 3 }}>
          <LoginButton />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;