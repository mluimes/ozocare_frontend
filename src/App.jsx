import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './services/logicaFake.js'
import logicaFake from './services/logicaFake.js'

function App() {
  const [medidas, setMedidas] = useState([]);

  // Función para obtener las medidas
  const obtenerMedidas = () => {
    logicaFake.getMedidas()
      .then((data) => setMedidas(data))
      .catch((err) => console.error('Error al obtener medidas:', err));
  };

  // llamada a la funcion cada x intervalo
  useEffect(() => {
    obtenerMedidas(); // Cargar medidas

    // Polling cada 10 seg
    const intervalId = setInterval(() => {
      obtenerMedidas();
    }, 10000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header>
        <a href="http://github.com/mluimes/ozocare_frontend" target="_blank">
          <img src="../img/logo.gif" className="logo" alt="Logo Ozocare" />
        </a>
      </header>
      <div>
        <h2>Historial de medidas</h2>
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Temperatura</th>
              <th>Concentracion (ppm)</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {medidas.map((medida) => (
              <tr key={medida._id}>
                <td>{medida._id}</td>
                <td>{medida.temperatura}</td>
                <td>{medida.concentracionGas}</td>
                <td>{new Date(medida.fecha).toLocaleString()}</td>
              </tr>
            ))}
            <tr>
              <td>prueba</td>
              <td>prueba</td>
              <td>prueba</td>
              <td>prueba</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <footer>
        <p>© OzoCare - Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
