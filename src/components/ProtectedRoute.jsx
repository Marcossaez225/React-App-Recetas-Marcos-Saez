import { Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
export default function ProtectedRoute({ children }){
  const { sessionUser } = useApp();
  return sessionUser ? children : <Navigate to="/login" />;
}
