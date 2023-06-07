
import PropTypes from 'prop-types';
import Login from '../Login';
import Logout from '../Logout';
import Account from '../account';
import { useState } from 'react';

const Navbar = ({setEstaLogeado, estaLogeado}) => {
    const [user, setUser] = useState({
        userNombre: '',
        userPassword: ''
    });
    const isLogin = estaLogeado === 'Iniciando';
    const isLogout = estaLogeado === 'Iniciada';

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
            {isLogin ? (<Login setEstaLogeado={setEstaLogeado} setUser={setUser}/>):(
                <nav className='navbar'> 
                    { isLogout ? (<Logout setEstaLogeado={setEstaLogeado} userName={user.nombre}/>):(
                        <Account setEstaLogeado={setEstaLogeado}/>
                    )}
                </nav>
            )}
        </div>
    </nav>
  )
}
Navbar.propTypes = {
    setEstaLogeado: PropTypes.func.isRequired,
    estaLogeado : PropTypes.string.isRequired
}

export default Navbar