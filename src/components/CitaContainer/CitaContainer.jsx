import CitaForm from "../CitaForm/CitaForm"
import CitaList from "../CitaList/CitaList"

const CitaContainer = () => {
    return (
        <div className="container-fluid row" >
            <div className="col">
                <CitaForm />
            </div>
            <div className="col">
                <CitaList />
            </div>
        </div>
    )
}

export default CitaContainer