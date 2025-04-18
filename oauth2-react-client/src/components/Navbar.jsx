import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            OAuth2 Client
          </Button>
        </Typography>
        {/* <Button color="inherit" component={Link} to="/">
          Home
        </Button> */}
        {/* <Button color="inherit" component={Link} to="/login">
          Login
        </Button> */}
        <LoginButton />
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;