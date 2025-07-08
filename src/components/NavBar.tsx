import { NavLink } from "react-router-dom"
export default function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Arriendos</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/Home" className="nav-link ">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Categorias"className="nav-link">Categorias</NavLink>
                            
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/Vehiculos" className="nav-link">
                                Vehiculos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/CrearUsuario" className="nav-link">
                                Crear Usuario
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to='/RegistrarDevolucion' className='nav-link'>
                                Arriendos Activos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/arriendos/terminados' className='nav-link'>
                                Arriendos Terminados
                            </NavLink>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
} 