import PropTypes from 'prop-types';

const Account = ({setEstaLogeado}) => {
    return (
        <form className='container-fluid justify-content-start'>
            <button type='button' className='btn btn-warning mx-2 text-success'>Crear cuenta</button>
            <button className='btn btn-outline-light' type='button' onClick={ () => setEstaLogeado('Iniciando')}> Iniciar sesión</button>
        </form>
    )
}
Account.propTypes = {
    setEstaLogeado : PropTypes.func.isRequired
}

export default Account