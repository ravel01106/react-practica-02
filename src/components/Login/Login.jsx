import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Login = ({setEstaLogeado, setUser}) => {
    const initUser = {
        nombre: '',
        password: ''
    }
    
    const [formState, setFormState] = useState(initUser);
    const [error, setError] = useState(false);

    const handleInputChange = (e) =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const comprobarContrasenia = (e) => {
        e.preventDefault();
        if(formState.nombre !== "" && formState.password === '123'){
            setUser(formState);
            setEstaLogeado('Iniciada');
        }else{
            setError(true);
            
        }

        setFormState({
            nombre: '',
            password: ''
        });
    }

    const mostrarError = () =>{
        toast.error('Usario o contraseña incorrectos', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    
    
    return (
        <form  className='row d-flex justify-content-end' onSubmit={comprobarContrasenia}>
            <div className='col'>
                <input  
                type='text' 
                className='form-control' 
                id='name'
                name='nombre'
                autoComplete='off'
                value={formState.nombre}
                placeholder='Introducir nombre'
                onChange={handleInputChange}/>
                    </div>

            <div className='col'>
                <input 
                type='password' 
                className='form-control' 
                id='surname'
                name='password'
                autoComplete='off'
                value={formState.password}
                placeholder='Introducir password'
                onChange={handleInputChange}/>
            </div>

            <div className='col'>
            <button className=' form-control btn btn-outline-light' type='submit' onClick={(error) ? mostrarError() : null}>Enviar datos</button>
            <ToastContainer/>
            {error ? setError(false) : null}
            </div>
        </form>
    )
}

Login.propTypes = {
    setEstaLogeado : PropTypes.func.isRequired,
    setUser : PropTypes.func.isRequired,
}

export default Login