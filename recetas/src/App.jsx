import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>RECETAS</h1>
      <div className="receta">
        <h2>Nombre de la Receta 1</h2>
        <p>Ingredientes: Ingrediente 1, Ingrediente 2, Ingrediente 3</p>
        <p>Pasos: Paso 1, Paso 2, Paso 3</p>
      </div>
      <div className="receta">
        <h2>Nombre de la Receta 2</h2>
        <p>Ingredientes: Ingrediente A, Ingrediente B, Ingrediente C</p>
        <p>Pasos: Paso A, Paso B, Paso C</p>
      </div>
      {/* Agrega más recetas según sea necesario */}
    </div>
  );
}

export default App;
