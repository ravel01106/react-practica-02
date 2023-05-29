import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={`${style.header}`} >
        <p className='p-3 text-success fw-semibold'>Administrador de Pacientes de Veterinaria</p>
    </div>
  )
}

export default Header