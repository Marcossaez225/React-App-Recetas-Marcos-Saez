import { createContext, useContext, useEffect, useState } from 'react';
const AppContext = createContext();
export const useApp = () => useContext(AppContext);
export function AppProvider({ children }) {
  const [recipes, setRecipes] = useState(() => JSON.parse(localStorage.getItem('recipes')) || []);
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const [sessionUser, setSessionUser] = useState(() => sessionStorage.getItem('sessionUser'));
  useEffect(() => localStorage.setItem('recipes', JSON.stringify(recipes)), [recipes]);
  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users]);
  useEffect(() => {
    sessionUser ? sessionStorage.setItem('sessionUser', sessionUser)
                : sessionStorage.removeItem('sessionUser');
  }, [sessionUser]);
  const addRecipe = (recipe) => setRecipes(p => [{ ...recipe, id: Date.now().toString() }, ...p]);
  const deleteRecipe = (id) => setRecipes(p => p.filter(r => r.id !== id));
  const register = ({ username, password }) => {
    if (users.some(u => u.username === username)) return { ok: false };
    setUsers(p => [...p, { username, password }]);
    setSessionUser(username);
    return { ok: true };
  };
  const login = ({ username, password }) => {
    const u = users.find(u => u.username === username && u.password === password);
    if (!u) return { ok: false };
    setSessionUser(username);
    return { ok: true };
  };
  const logout = () => setSessionUser(null);
  return (
    <AppContext.Provider value={{ recipes, addRecipe, deleteRecipe, register, login, logout, sessionUser }}>
      {children}
    </AppContext.Provider>
  );
}
