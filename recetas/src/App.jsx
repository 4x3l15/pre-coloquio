import React from 'react';
import './App.css';
import Home from './componentes/Home';
function Receta({ nombre, ingredientes, pasos }) {
  return (
    <div className="receta">
      <h2>{nombre}</h2>
      <p>Ingredientes: {ingredientes.join(', ')}</p>
      <p>Pasos: {pasos.join(', ')}</p>
    </div>
  );
}

function App() {
  const recetas = [
    { nombre: 'Receta de bizcuechelo',ingredientes: ['2 tazas Harina leudante', '1 taza azúcar','1 taza leche','150 cc aceite','2 huevos','Esencia de vainilla','Ralladura de naranja o limón'], pasos: ['Paso 1:Mezclar los huevos, la esencia de Vainilla y la cáscara de naranja', 'Paso 2:Colocar el aceite, azúcar y la leche y mezclar', 'Paso 3:Colocar las 2 tazas de harina y mezclar hasta que no queden grumos','paso 4:Enmantecar y enharinar el molde y colocar la preparación','paso 5:Llevar al horno 160° por 45 minutos o hasta pinchar y que salga seco! IMPORTANTE no abrir el horno'] },
    { nombre: 'Receta de chipa', ingredientes: ['500 gr Fécula de mandioca (almidón de mandioca)', '3 Huevos', '50 gr Manteca','100 cc Leche','2 cditas Sal (opcional)','135 gr Quesos semi duros','150 gr Queso cremoso','2 cditas Polvo para hornear'], pasos: ['Paso 1:Hacer una corona con la fécula, el polvo para hornear y la sal (en caso de usarla). En el centro colocar los huevos, los quesos (en hebras o rallados), la manteca a punto pomada y la leche de a poco.', 'Paso 2:Unir todos los ingredientes con las manos hasta formar una masa. Al no tener gluten, no es necesario amasar, más bien unir. Taparla y llevarla a la heladera por 30 min.', 'Paso 3:Hacer los bollos de tamaño medio (teniendo en cuenta que van a crecer un poco), colocarlos en una placa y llevarlos a la heladera por 30 min más.','paso 4:Precalentar el horno y cocinar a fuego fuerte (230) por 15 minutos aprox o hasta que estén bien dorados. 🥳 Quedan crocantes por fuera y tiernos por dentro 🥰 Lo ideal es comerlos calientes/tibios👍🏻    ',] },
    { nombre: 'Receta de chocotorta', ingredientes: ['250 g galletitas Chocolinas o cualquiera de chocolate .', '400 g Dulce de leche', '400 g quedo blanco (tipo mendicream o casancream)','Taza café de filtro, no muy fuerte','1 poco Ron','Chocolate cobertura o crema chantilly opcional.'], pasos: ['Paso 1:Mezclar el queso con el dulce de leche. Bien unido pero no batir con fuerza.', 'Paso 2:Preparar el cafe de filtro o los saquitos que vienen tipo de te .Esos son practicos y no son tan fuertes.', 'Paso 3:Poner el café en un plato ondo. Agregar un chorrito de ron. Opcional.','paso 4:Mojar las galletitas en el cafe y poner en un plato armando la base de la torta.','paso 5:Untar con la preparación.','paso 6:Armar varias capas con galletitas y el queso con el dulce de leche.','Cubrir bien con la crema. Con un paquete de 250 g salen unas 3 capas. Llevar a la heladera por 2 horas. Así enfría bien bien.','paso 7:Yo cubrí la torta con chocolate cobertura Aguila que viene listo para usar. Se calienta en el agua y en unos minutos está derretido.'] },
  ];

  return (
    <div>

      <Home/>
      <h1>RECETAS</h1>
      {recetas.map((receta, index) => (
        <Receta key={index} {...receta} />
      ))}
    </div>
  );
}

export default App;
