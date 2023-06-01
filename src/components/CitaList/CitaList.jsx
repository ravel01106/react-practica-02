import PropTypes from 'prop-types';
import Cita from '../Cita';
const CitaList = ({listaCita, handleDelete}) => {
  const tieneCitas = listaCita.length > 0;
  return (
    <div className='row mx-2'>
      {
        tieneCitas ? (        
          listaCita && 
          listaCita.map((cita, index) => {
            return(
              <Cita key={index} cita={cita} handleDelete={handleDelete}/>
            );
          })) : (
            <h1 className='text-success fw-semibold text-start'>No hay citas previstas</h1>
          )

      }
      
    </div>
  )
}
CitaList.propTypes = {
  listaCita : PropTypes.array.isRequired,
  handleDelete : PropTypes.func.isRequired
}

export default CitaList