import PropTypes from 'prop-types';
import { useState } from 'react';

const CitaForm = ({setCita}) => {
  const initCita = {
    nombreMascota : '',
    nombreDuenio : '',
    fecha : '',
    hora : '',
    sintomas : ''
  }
  
  const [formState, setFormState] = useState(initCita);

  const handleInputChange = (e) =>{
    setFormState({
      ...formState, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setCita(formState);
    setFormState({
      nombreMascota : '',
      nombreDuenio : '',
      fecha : '',
      hora : '',
      sintomas : ''
    });
  }

  return (
    <div className='card m-5 text-bg-light bg-gradient border-light' >
      <div className='card-body text-start'>
        <h3 className='card-title text-success fw-medium mb-4'>Añadir cita</h3>
        <form className='row g-3 border-top border-2' onSubmit={handleSubmit}>

          <div className='col-12'>
            <label htmlFor='nombreMascota' className='form-label'>Nombre mascota</label>
            <input 
            type='text' 
            name = 'nombreMascota'
            className='form-control' 
            value={formState.nombreMascota}
            onChange={handleInputChange}
            id='nombreMascota' />
          </div>

          <div className='row-md-6'>
            <label htmlFor='nombreDuenio' className='form-label'>Nombre dueño</label>
            <input 
            type='text' 
            name = 'nombreDuenio'
            className='form-control' 
            value={formState.nombreDuenio}
            onChange={handleInputChange}
            id='nombreDuenio' />
          </div>

          <div className='col-md-6'>
            <label htmlFor='fecha' className='form-label'>Fecha</label>
            <input 
            type='date' 
            name = 'fecha'
            className='form-control'
            value={formState.fecha}
            onChange={handleInputChange}
            id='fecha' />
          </div>

          <div className='col-md-6'>
            <label htmlFor='hora' className='form-label'>Hora</label>
            <input 
            type='time' 
            className='form-control' 
            value={formState.hora}
            name = 'hora' 
            id='hora' 
            onChange={handleInputChange}/>
            
          </div>

          <div className='row-md-6'>
            <label htmlFor='sintomas' className='form-label'>Síntomas</label>
            <textarea 
            className='form-control' 
            name='sintomas' 
            value={formState.sintomas}
            onChange={handleInputChange}
            id='sintomas'
            placeholder='Los síntomas...'/>
          </div>
          
          <div className='row-md-6'>
            <button type='submit' className='btn btn-warning '>Nueva cita</button>
          </div>

        </form>
      </div>
    </div>
  )
}
CitaForm.propTypes = {
  setCita : PropTypes.func.isRequired
}

export default CitaForm