import PropTypes from 'prop-types'

const Logout = ({handleNoIniciado, userName}) => {

    return (
        <form className="container-fluid justify-content-start">
            <div className='mx-3 text-white-50'>Bienvenido: <p className='d-inline text-white'>{userName}</p></div>
            <button type='button' className='btn btn-warning text-success' onClick={handleNoIniciado}>Cerrar sesión</button>
        </form>
    )
}

Logout.propTypes = {
    handleNoIniciado: PropTypes.func.isRequired,
    userName : PropTypes.string.isRequired
}

export default Logout