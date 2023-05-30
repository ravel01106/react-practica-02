import PropTypes from 'prop-types';

const IniciarSesion = ({handleIniciando}) => {
    return (
        <form className="container-fluid justify-content-start">
            <button type="button" className="btn btn-warning mx-2 text-success">Crear cuenta</button>
            <button className="btn btn-outline-light" type="button" onClick={handleIniciando}> Iniciar sesión</button>
        </form>
    )
}
IniciarSesion.propTypes = {
    handleIniciando : PropTypes.func.isRequired
}

export default IniciarSesion