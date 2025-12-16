# React Recipes App 🍽️

Una aplicación web de recetas de cocina desarrollada con **React**, **Vite** y **Material UI**, que permite a los usuarios registrarse, iniciar sesión, agregar, eliminar y consultar recetas. La aplicación cuenta con **modo oscuro/light mode**, persistencia de datos en `localStorage` y `sessionStorage`, y rutas protegidas.

---

## 🏆 Características principales

- Registro y login de usuarios con persistencia en `localStorage` y sesión en `sessionStorage`.
- Agregar nuevas recetas con:
  - Nombre
  - Descripción
  - Ingredientes (separados por coma)
- Listado de recetas dinámico
- Visualización de detalles de cada receta
- Eliminar recetas desde la lista
- Navegación protegida para agregar recetas (solo usuarios logueados)
- Tema **oscuro/light mode** con toggle en el header
- Diseño responsivo con Material UI

---

## 🚀 Tecnologías utilizadas

- **React 18**  
- **Vite** (bundler)  
- **Material UI v5**  
- **React Router DOM v6**  
- **React Hooks**: `useState`, `useEffect`, `useContext`  
- **Persistencia local**: `localStorage` y `sessionStorage`

---

## 📦 Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd react_recipes_app_full

    Instalar dependencias:

npm install

    Levantar el servidor de desarrollo:

npm run dev

    Abrir en el navegador:

http://localhost:5173/

📁 Estructura del proyecto

react_recipes_app_full/
├─ src/
│  ├─ components/      # Header, ProtectedRoute
│  ├─ context/         # AppContext, ThemeContext
│  ├─ pages/           # Login, Register, RecipesList, RecipeDetails, AddRecipe
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md

🌗 Modo oscuro / Light mode

    Toggle en la barra superior para cambiar entre temas.

    Material UI adapta colores de fondo y textos automáticamente.

    Paleta personalizada: verde predominante y acento naranja.

🔧 Uso

    Registro/Login: crear usuario y loguearse para acceder a rutas protegidas.

    Agregar receta: solo usuarios logueados pueden agregar nuevas recetas.

    Lista de recetas: ver todas las recetas, acceder a detalles y eliminar.

    Detalles de receta: visualizar descripción completa e ingredientes.

📌 Buenas prácticas implementadas

    Componentes reutilizables

    Manejo de estado global con useContext

    Persistencia de datos

    Rutas protegidas con ProtectedRoute

    Hooks de React (useState, useEffect, useContext)

    Diseño responsivo con Material UI

💡 Posibles mejoras futuras

    Validaciones más estrictas en formularios

    Snackbars para notificaciones

    Animaciones al agregar/eliminar recetas

    Filtros y búsqueda en la lista de recetas

    Perfil de usuario y edición de recetas

Este proyecto es libre para uso educativo.


