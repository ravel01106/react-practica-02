import PropTypes from 'prop-types';
import { useState } from 'react';

const Login = ({handleIniciada, user, setUser}) => {
    const initUser = {
        nombre: '',
        password: ''
    }

    const [formState, setFormState] = useState(initUser);

    const handleInputChange = (e) =>{
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const comprobarContrasenia = (e) => {
        e.preventDefault();
        if(formState.nombre !== '' && formState.password === '123'){
            setUser(formState);
            handleIniciada();
        }else{
            window.alert('nope');
        }

        setFormState({
            nombre: '',
            password: ''
        });

    }
    
    return (
        <div className='row'>
            <div className='form-content'>
                <form  className='row' onSubmit={comprobarContrasenia}>
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
                        value={formState.password}
                        placeholder='Introducir password'
                        onChange={handleInputChange}/>
                    </div>

                    <div className='col'>
                        <button className=' form-control btn btn-outline-light' type='submit'>Enviar datos</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    handleIniciada : PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
    setUser : PropTypes.func.isRequired
}

export default Login