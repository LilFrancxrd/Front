// src/components/RutaPrivada.tsx
import  { type JSX } from 'react';
import { Navigate } from 'react-router-dom'; // Importa Navigate desde react-router-dom

// Definimos las props que recibirá nuestro componente RutaPrivada
// 'children' representará los componentes hijos que se renderizarán si el usuario está autenticado
interface RutaPrivadaProps {
  children: JSX.Element; // Esto significa que esperará un elemento JSX como hijo
}

// Exportamos el componente por defecto
export default function RutaPrivada({ children }: RutaPrivadaProps) {
  // 1. Obtener el token del localStorage
  const token = localStorage.getItem('token');

  // 2. Verificar si el token existe
  if (!token) {
    // Si no hay token, el usuario no está autenticado.
    // Lo redirigimos a la página de login.
    // 'replace' hace que la nueva ubicación reemplace la actual en el historial de navegación,
    // para que el usuario no pueda simplemente 'volver' a la página protegida.
    return <Navigate to="/login" replace />;
  }

  // 3. Si hay token, el usuario está autenticado.
  // Renderizamos los componentes hijos (la página que quería ver).
  return children;
}