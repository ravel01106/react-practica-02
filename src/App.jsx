import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [estaLogeado, setEstaLogeado] = useState('');
  return (
    <div className="App">
      <Header/>
      <Navbar setEstaLogeado={setEstaLogeado}/>
      <p>{estaLogeado}</p>
    </div>
  );
}

export default App;
