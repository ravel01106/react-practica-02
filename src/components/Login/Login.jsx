import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Login = ({handleIniciada, setUser}) => {
    const initUser = {
        nombre: '',
        password: ''
    }
    
    const [formState, setFormState] = useState(initUser);

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (e) =>{
        setError(false);
        setFormState({...formState, [e.target.name]: e.target.value})
        // if(e.target.name === "nombre"){
        //     setNombre(e.target.value);
        // }
        // if(e.target.name === "password"){
        //     setPassword(e.target.value);
        // }
    }

    const comprobarContrasenia = (e) => {
        e.preventDefault();
        if(nombre !== "" && password === '123'){
            setUser({
                userNombre: nombre,
                userPassword: password
                
            });
            handleIniciada();
        }else{
            setError(true);
            
        }
        setNombre('');
        setPassword('');

        // setFormState({
        //     nombre: '',
        //     password: ''
        // });
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
            <ToastContainer />
            </div>
        </form>
    )
}

Login.propTypes = {
    handleIniciada : PropTypes.func.isRequired,
    setUser : PropTypes.func.isRequired,
}

export default Login