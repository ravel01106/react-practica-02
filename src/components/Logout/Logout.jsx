import PropTypes from 'prop-types'

const Logout = ({handleNoIniciado}) => {

  return (
    <div>
    <button className="btn btn-outline-light" type="button" onClick={handleNoIniciado}>Cerrar sesión</button>
</div>
  )
}

Logout.propTypes = {
    handleNoIniciado: PropTypes.func.isRequired
}

export default Logout