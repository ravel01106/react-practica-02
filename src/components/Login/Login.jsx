import PropTypes from 'prop-types'
import { useState } from 'react'

const Login = ({navbar, setNavbar, setUser, setNavbarLogin}) => {
    const [login, setlogin] = useState(navbar);

    const initUser = {
        nombre: '',
        contrasena: ''
    }

    const [form, setForm] = useState(initUser);

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const isContrasenaCorrecta = form.contrasena === '123';
    const hayNombre = form.nombre.length !== 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isContrasenaCorrecta && hayNombre){
            setlogin('logout')
            setNavbarLogin(true)
        }else{
            window.alert('nope')
            setlogin('')
        }

        setNavbar(login)
        setUser(form)
    }
    return (
    <div className="">
        <form onSubmit={handleSubmit} className="d-flex">
                <input className="form-control me-2" 
                type="text"
                placeholder="Name" 
                id="nombre" 
                name="nombre"
                value={form.nombre} 
                onChange={handleInputChange}
                />

                <input className="form-control me-2" 
                type="password" 
                placeholder="Password" 
                id="contrasena" 
                name="contrasena"
                value={form.contrasena} 
                onChange={handleInputChange}/>

                <button className="btn btn-warning text-success" 
                type="submit" id="button" >Aceptar</button>
            </form>
    </div>
    )
}

Login.propTypes = {
    navbar: PropTypes.string.isRequired,
    setNavbar: PropTypes.func.isRequired,
    setUser : PropTypes.func.isRequired,
    setNavbarLogin : PropTypes.func.isRequired
}

export default Login