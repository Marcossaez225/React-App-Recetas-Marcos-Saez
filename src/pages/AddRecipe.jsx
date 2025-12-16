import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AddRecipe() {
  const { addRecipe } = useApp();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      name,
      description,
      ingredients: ingredients.split(',').map(i => i.trim()).filter(Boolean),
    });
    navigate('/recipes');
  };

  return (
    <Box sx={{ maxWidth: 600, m: '50px auto', p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Agregar Receta</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nombre" fullWidth value={name} onChange={(e) => setName(e.target.value)} margin="normal" />
        <TextField label="Descripción" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} margin="normal" multiline rows={3} />
        <TextField label="Ingredientes (separados por coma)" fullWidth value={ingredients} onChange={(e) => setIngredients(e.target.value)} margin="normal" />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Guardar Receta</Button>
      </form>
    </Box>
  );
}
