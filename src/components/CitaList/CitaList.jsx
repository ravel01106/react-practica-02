import PropTypes from 'prop-types';
const CitaList = ({cita:{nombreMascota, nombreDuenio, fecha, hora, sintomas}}) => {
  return (
    <div>
      <h1>Cosas</h1>
      <h5>{nombreMascota}</h5>
      <p>{nombreDuenio}</p>
      <p>{fecha}</p>
      <p>{hora}</p>
      <p>{sintomas}</p>
    </div>
  )
}
CitaList.propTypes = {
  cita : PropTypes.object.isRequired
}

export default CitaList