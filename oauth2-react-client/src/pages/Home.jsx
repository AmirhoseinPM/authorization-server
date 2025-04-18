import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Welcome to OAuth2 Client
      </Typography>
      <Typography paragraph>
        This is a demo application that demonstrates OAuth2 Authorization Code flow with Spring Authorization Server.
      </Typography>
    </Container>
  );
};

export default Home;