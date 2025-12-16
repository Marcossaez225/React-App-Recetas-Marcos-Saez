import { useApp } from '../context/AppContext';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RecipesList() {
  const { recipes, deleteRecipe } = useApp();

  if (!recipes.length) return <Typography variant="h6" sx={{ m: 2 }}>No hay recetas aún.</Typography>;

  return (
    <div>
      {recipes.map(r => (
        <Card key={r.id} sx={{ m: 2 }}>
          <CardContent>
            <Typography variant="h5">{r.name}</Typography>
            <Typography variant="body2">{r.description}</Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/recipes/${r.id}`}>Ver detalles</Button>
            <Button color="error" variant="contained" onClick={() => deleteRecipe(r.id)}>Eliminar</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
