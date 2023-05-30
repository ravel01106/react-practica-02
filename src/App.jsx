import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CitaContainer from './components/CitaContainer';
function App() {
  const [estaLogeado, setEstaLogeado] = useState('');
  const estaIniciada = estaLogeado === 'Iniciada';
  return (
    <div className="App">
      <Header/>
      <Navbar setEstaLogeado={setEstaLogeado}/>
      {estaIniciada ? (<CitaContainer /> ):( <></> )}
    </div>
  );
}

export default App;
