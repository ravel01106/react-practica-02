import { useState } from "react"
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import PropTypes from 'prop-types';

const Navbar = ({navbarLogin, setNavbarLogin}) => {
    const [navbar, setNavbar] = useState("");
    const [user, setUser] = useState({
        nombre : '',
        contrasenia: ''
    });

    const isLogin = navbar === 'login';
    const isLogout = navbar === 'logout';

    const handleLogin = (e) => {
        setNavbar("login");
    }
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary bg-success">
        <div className="container-fluid px-5">
            <a className="navbar-brand" href="#">
                <img src={`./logo.png`} alt="#" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-white">
                    <a className="nav-link text-white active" aria-current="page" href="#">Inicio</a>
                    <a className="nav-link text-white-50" href="#">Acerca de</a>
                    <a className="nav-link text-white-50" href="#">Contacto</a>
                </div>
            </div>
            {isLogin ? (   
                <Login navbar= {navbar} setNavbar={setNavbar} setUser={setUser} setNavbarLogin = {setNavbarLogin}/>         
           
            ): (
                <nav className="navbar bg-body-tertiary">
                    {isLogout ? (
                        <Logout user={user.nombre} setNavbar={setNavbar}  setNavbarLogin = {setNavbarLogin}/>
                    ) : (
                        <form className="container-fluid justify-content-start">
                            <button type="button" className="btn btn-warning mx-2 text-success">Crear cuenta</button>
                            <button className="btn btn-outline-light" type="button" onClick={handleLogin}> Iniciar sesión</button>
                        </form>
                    )}
                </nav>
            )

            }

        </div>
    </nav>
  )
}
Navbar.propTypes = {
    navbarLogin: PropTypes.bool.isRequired,
    setNavbarLogin: PropTypes.func.isRequired
}

export default Navbar