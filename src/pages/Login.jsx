import { Button, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login({ username, password });
    if (!res.ok) {
      setError(res.message || 'Usuario o contraseña incorrectos');
      return;
    }
    navigate('/recipes');
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '50px auto', padding: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Iniciar Sesión</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Usuario"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Contraseña"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Entrar</Button>
      </form>
    </Box>
  );
}
