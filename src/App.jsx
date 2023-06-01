import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CitaContainer from './components/CitaContainer';
function App() {
  const [estaLogeado, setEstaLogeado] = useState('');
  const [listaCita, setListaCita] = useState([]);
  const estaIniciada = estaLogeado === 'Iniciada';
  const handleDelete = (id) => {
    setListaCita(listaCita.filter((cita) => cita.id !== id));
  }

  return (
    <div className="App">
      <Header/>
      <Navbar setEstaLogeado={setEstaLogeado}/>
      {estaIniciada ? ( <CitaContainer listaCita={listaCita} setListaCita={setListaCita} handleDelete={handleDelete}/> ):( <></> )}
    </div>
  );
}

export default App;
