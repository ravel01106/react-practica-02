
import PropTypes from 'prop-types';
import Login from '../Login';
import Logout from '../Logout';
import IniciarSesion from '../IniciarSesion';
import { useState } from 'react';

const Navbar = ({setEstaLogeado}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [user, setUser] = useState({
        nombre: '',
        password: ''
    });

    const handleIniciando = () => {
        setEstaLogeado('Iniciando');
        setIsLogin(!isLogin)
    }
    const handleIniciada = () => {
        setEstaLogeado('Iniciada');
        setIsLogout(!isLogout);
        setIsLogin(!isLogin);
    }
    const handleNoIniciado = () => {
        setEstaLogeado('');
        setIsLogout(!isLogout);
    }
  return (
    <nav className='navbar navbar-expand-sm bg-success '>
        <div className='container-fluid px-5'>
            <a className='navbar-brand' href='#'>
                <img src={`./logo.png`} alt='#' />
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav text-white'>
                    <a className='nav-link text-white active' aria-current='page' href='#'>Inicio</a>
                    <a className='nav-link text-white-50' href='#'>Acerca de</a>
                    <a className='nav-link text-white-50' href='#'>Contacto</a>
                </div>
            </div>
            {isLogin ? (<Login handleIniciada={handleIniciada} setUser={setUser}/>):(
                <nav className='navbar'> 
                    { isLogout ? (<Logout handleNoIniciado={handleNoIniciado} userName={user.nombre}/>):(
                        <IniciarSesion handleIniciando={handleIniciando}/>
                    )}
                </nav>
            )}
        </div>
    </nav>
  )
}
Navbar.propTypes = {
    setEstaLogeado: PropTypes.func.isRequired
}

export default Navbar