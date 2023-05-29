import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [estaLogeado, setEstaLogeado] = useState(false);
  const poderMostrarCitas = estaLogeado === true;
  return (
    <div className="App">
      <Header/>
      <Navbar setNavbarLogin={setEstaLogeado}/>
      {poderMostrarCitas ? (<p>Hola</p>): (<p></p>)}
    </div>
  );
}

export default App;
