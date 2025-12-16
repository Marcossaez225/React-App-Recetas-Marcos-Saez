import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Box, Typography } from '@mui/material';

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipes } = useApp();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <Typography sx={{ m: 2 }}>Receta no encontrada.</Typography>;

  return (
    <Box sx={{ maxWidth: 600, m: '20px auto', p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Typography variant="h4" mb={2}>{recipe.name}</Typography>
      <Typography variant="body1" mb={2}>{recipe.description}</Typography>
      <Typography variant="h6">Ingredientes:</Typography>
      {recipe.ingredients && recipe.ingredients.length ? (
        <ul>
          {recipe.ingredients.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      ) : <Typography>No hay ingredientes.</Typography>}
    </Box>
  );
}
