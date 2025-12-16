import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useThemeMode } from '../context/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function Header() {
  const { sessionUser, logout } = useApp();
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/recipes">Recetas</Button>

        {sessionUser ? (
          <>
            <Button color="inherit" component={Link} to="/add">Agregar</Button>
            <Button color="inherit" onClick={logout}>Salir</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Registro</Button>
          </>
        )}

        <IconButton color="inherit" onClick={toggleMode} sx={{ ml: 'auto' }}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
