import { useState } from 'react';
import CitaForm from '../CitaForm/CitaForm';
import CitaList from '../CitaList/CitaList';


const CitaContainer = () => {
    const [cita, setCita] = useState({
        nombreMascota : '',
        nombreDuenio : '',
        fecha : '',
        hora : '',
        sintomas : ''
    });
    return (
        <div className='container-fluid row' >
            <div className='col-md-6  d-flex'>
                <CitaForm setCita={setCita}/>
            </div>
            <div className='col-md-6'>
                <CitaList cita={cita}/>
            </div>
        </div>
    )
}

export default CitaContainer