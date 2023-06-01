import CitaForm from '../CitaForm';
import PropTypes from 'prop-types';
import CitaList from '../CitaList';


const CitaContainer = ({listaCita, setListaCita, handleDelete}) => {
    return (
        <div className='container-fluid row p-5' >
            <div className='col-md-6  d-flex'>
                <CitaForm setListaCita={setListaCita}  listaCita= {listaCita}/>
            </div>
            <div className='col-md-6'>
                <CitaList listaCita={listaCita} handleDelete={handleDelete}/>
            </div>
        </div>
    )
}
CitaContainer.propTypes = {
    listaCita : PropTypes.array.isRequired,
    setListaCita : PropTypes.func.isRequired,
    handleDelete : PropTypes.func.isRequired
  }

export default CitaContainer