/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Cita = ({ cita}) => {
  return (
    <div>
      <p>{cita.nombreMascota}</p>
      <p>{cita.nombreDuenio}</p>
      <p>{cita.fecha}</p>
      <p>{cita.hora}</p>
      <p>{cita.sintomas}</p>
    </div>
  )
}

Cita.propTypes = {
  cita : PropTypes.object
}

export default Cita