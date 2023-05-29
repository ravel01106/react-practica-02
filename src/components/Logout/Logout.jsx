import PropTypes from 'prop-types'

const Logout = ({user, setNavbar, setNavbarLogin}) => {
    const handleApp = () => {
        setNavbar("")
        setNavbarLogin(false)
    }

  return (
    <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
            <div className='mx-3 text-white-50'>Bienvenido: <p className='d-inline text-white'>{user}</p></div>
            <button className="btn btn-warning text-success fw-semibold" type="button" onClick={handleApp}>Cerrar session</button>
        </form>
    </nav>
  )
}

Logout.propTypes = {
    user: PropTypes.string.isRequired,
    setNavbar: PropTypes.func.isRequired,
    setNavbarLogin: PropTypes.func.isRequired
}

export default Logout