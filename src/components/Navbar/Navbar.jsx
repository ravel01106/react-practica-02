import { useState } from "react"

const Navbar = () => {
    const [login, setlogin] = useState('button');
    const isLogin = login === 'login';
    const handleLogin = (e) => {
        setlogin("login");
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
            {!isLogin ? (            
            <nav className="navbar bg-body-tertiary">
                <form className="container-fluid justify-content-start">
                    <button type="button" className="btn btn-warning mx-2">Crear cuenta</button>
                    <button className="btn btn-outline-light" type="button" onClick={handleLogin}> Iniciar sesión</button>
                </form>
            </nav>
            ): (
                <p>login</p>
            )
            }

        </div>
    </nav>
  )
}

export default Navbar