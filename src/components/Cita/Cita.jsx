/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import {AiTwotoneCompass} from 'react-icons/ai';

const Cita = ({ cita:{id, nombreMascota, nombreDuenio, fecha, hora, sintomas}, handleDelete}) => {
  const fechaDividida = fecha.split('-');
  const fechaParseada = fechaDividida[2] + '/' + fechaDividida[1] + '/' + fechaDividida[0];
  return (
    <div className='card text-start mb-3'>
      <h5 className='card-header'>{nombreMascota}</h5>
      <div className='card-body '>
        <p className='card-text d-inline'>Dueño: <p className='d-inline'>{nombreDuenio}</p></p>
        <div className='d-flex'>
        <p className='card-text'>Fecha: <p className='d-inline'>{fechaParseada}</p></p>
        <p className='card-text ms-auto'>Hora: <p className='d-inline'>{hora}</p></p>
        </div>
        <p className='card-text'>Sintomas: <p>{sintomas}</p></p>
        <button href='#' className='btn btn-danger' onClick={() => handleDelete(id)}> <AiTwotoneCompass/> Cita cerrada</button>
      </div>
    </div>
  )
}

Cita.propTypes = {
  nombreMascota : PropTypes.string,
  nombreDuenio : PropTypes.string,
  fecha : PropTypes.string,
  hora : PropTypes.string,
  sintomas : PropTypes.string,
  handleDelete : PropTypes.func
}

export default Cita