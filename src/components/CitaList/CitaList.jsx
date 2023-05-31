import PropTypes from 'prop-types';
import Cita from '../Cita';
const CitaList = ({listaCita}) => {
  const tieneCitas = listaCita.length > 0;
  return (
    <div className='row'>
      {
        tieneCitas ? (        
          listaCita && 
          listaCita.map((cita, index) => {
            return(
              <Cita key={index} cita={cita}/>
            );
          })) : (
            <h1>NO HAY CITAS</h1>
          )

      }
      
    </div>
  )
}
CitaList.propTypes = {
  listaCita : PropTypes.array.isRequired
}

export default CitaList