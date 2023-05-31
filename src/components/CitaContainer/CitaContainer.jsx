import { useState } from 'react';
import CitaForm from '../CitaForm/CitaForm';
// import CitaList from '../CitaList/CitaList';
// import PropTypes from 'prop-types';
import CitaList from '../CitaList/CitaList';


const CitaContainer = () => {
    const [listaCita, setListaCita] = useState([]);
    const [cita, setCita] = useState({
        nombreMascota : '',
        nombreDuenio : '',
        fecha : '',
        hora : '',
        sintomas : ''
    });
    const handleAdd = () => {
        setListaCita([
            ...listaCita,
            {
                nombreMascota : cita.nombreMascota,
                nombreDuenio : cita.nombreDuenio,
                fecha : cita.fecha,
                hora : cita.hora,
                sintomas : cita.sintomas
            }
        ])
    }
    return (
        <div className='container-fluid row' >
            <div className='col-md-6  d-flex'>
                <CitaForm setCita={setCita} handleAdd={handleAdd}/>
            </div>
            <div className='col-md-6'>
                <CitaList listaCita={listaCita} cita={cita}/>
            </div>
        </div>
    )
}
// CitaContainer.propTypes = {
//     listaCita : PropTypes.array.isRequired,
//     setListaCita : PropTypes.func.isRequired
//   }

export default CitaContainer