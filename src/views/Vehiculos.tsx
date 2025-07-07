import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Vehiculos(){

    const [patente, setPatente]= useState('');
    const [tipoVehiculo, setTipoVehiculo]= useState('');
    const [rutCliente, setRutCliente]= useState('');
    const [nomCliente, setNomCliente]= useState('');

    const [patenteError, setPatenteError] = useState('');
    const [tipoVehiculoError, setTipoVehiculoError] = useState('');
    const [rutClienteError, setRutClienteError] = useState('');
    const [nomClienteError, setNomClienteError] = useState('');

    const [generalError, setGeneralError] = useState(''); //Errores api
    const [successMessage, setSuccessMessage] = useState('');


    const [isLoading , setIsLoading] = useState(false);
    
    const navigate = useNavigate();


    const enviarForm = async(e:React.FormEvent)=>{

        e.preventDefault()
        setPatenteError('');
        setTipoVehiculoError('');
        setRutClienteError('');
        setNomClienteError('');
        setGeneralError('');
        setSuccessMessage('');

        let valido = true;

        // if(patente.trim()){
        //     setPatenteError('No puede estar en blanco')
        //     valido = false
        // }

        if (!tipoVehiculo || tipoVehiculo === 'placeholder-value') { 
            setTipoVehiculoError('Debes seleccionar un vehiculo');
            valido = false;
        }

        if(!rutCliente.trim()){
            setRutClienteError("El rut no puede estar en blanco")
        }
        if(!nomCliente.trim()){
            setNomClienteError("El nombre no puede estar en blanco")
        }

        setIsLoading(true);

        try {
            
            const response = await axiosClient.post('/arriendo/crear',{
                patente,
                tipoVehiculo,
                rutCliente,
                nomCliente
            })

            setSuccessMessage('Arriendo ingresado correctamente')
            console.log('Arriendo creado:',response.data)

            navigate('/arriendos')
        } catch (error) {
            
        }

    }

    return(
        <>
            
                <h2>Vehiculos</h2>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-3 mt-4 mt-lg-3 me-lg-1 mu-lg-2">
                            <div className="card ">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center d-flex flex-column align-items-center">
                                        <img src="public\img\Toyota Yaris.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Toyota Yaris</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Ford Fusion 2020 azul.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Ford Fusiomo 2020</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Ford Fusion 2018.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Ford Fusion 2018</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Honda Civic 2.webp" alt="" style={{height:'200px'}} />
                                        <h4>Honda Civic 2020</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-3 mt-1 mt-lg-3 me-lg-1">
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Hyundai Elantra 2015.png" alt="" style={{height:'200px'}} />
                                        <h4>Hyunday Elantra 2015</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Hyundai Elantra2025.jpeg" alt="" style={{height:'200px'}} />
                                        <h4>Hyundai Elantra 2025</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Kia Optima 2020.png" alt="" style={{height:'200px'}} />
                                        <h4>Kia Optima</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Mazda 3 gris 2.png" alt="" style={{height:'200px'}} />
                                        <h4>Mazda 3</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-3 mt-1 mt-lg-3 me-lg-1">
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Nissan Sentra 2.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Nissan Sentra</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Toyota Corolla.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Toyota Corolla</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Audi a5 azul.png" alt="" style={{height:'200px'}} />
                                        <h4>Auida A5</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Audi a5 azul.png" alt="" style={{height:'200px'}} />
                                        <h4>Auida A5</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ad nihil dignissimos doloremque inventore, deserunt eum labore consectetur corrupti sapiente aliquam nam? Dolores omnis quia sit maxime molestias veritatis? Temporibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AQUI EMPIEZA EL FORM */}

                        <div className="col">
                            <div className="card-tittle">
                                <div className="card-body text-center">
                                    <div className="card shadow-sm">
                                        <div className="card-body p-4">
                                            <h2 className="card-title text-center mb-4">Ingresar Nuevo Arriendo</h2>
                                            {/* Mensajes de error y éxito generales */}
                                            {generalError && <div className="alert alert-danger" role="alert">{generalError}</div>}
                                            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                                                
                                            <form onSubmit={enviarForm}>
                                            {/* Campo Patente */}
                                            <div className="mb-3">
                                                <label htmlFor="patente" className="form-label">Patente:</label>
                                                <input
                                                    type="text"
                                                    id="patente"
                                                    className={`form-control ${patenteError ? 'is-invalid' : ''}`} // Clase para feedback de error
                                                    value={patente}
                                                    onChange={(e) => setPatente(e.target.value)}
                                                    disabled={isLoading}
                                                />
                                                {patenteError && <div className="invalid-feedback">{patenteError}</div>} {/* Mensaje de error Bootstrap */}
                                            </div>

                                            {/* Campo Tipo Vehículo (Menú Desplegable) */}
                                            <div className="mb-3">
                                                <label htmlFor="tipoVehiculo" className="form-label">Tipo de Vehículo:</label>
                                                <select
                                                    id="tipoVehiculo"
                                                    className={`form-select ${tipoVehiculoError ? 'is-invalid' : ''}`} // Clase para feedback de error
                                                    value={tipoVehiculo}
                                                    onChange={(e) => setTipoVehiculo(e.target.value)}
                                                    disabled={isLoading}
                                                >
                                                    <option value="placeholder-value" disabled hidden>Selecciona un tipo</option>
                                                    <option value="automovil">Automóvil</option>
                                                    <option value="camioneta">Camioneta</option>
                                                    <option value="motocicleta">Motocicleta</option>
                                                    <option value="furgoneta">Furgoneta</option>
                                                </select>
                                                {tipoVehiculoError && <div className="invalid-feedback">{tipoVehiculoError}</div>}
                                            </div>

                                            {/* Campo RUT Cliente */}
                                            <div className="mb-3">
                                                <label htmlFor="rutCliente" className="form-label">RUT Cliente:</label>
                                                <input
                                                    type="text"
                                                    id="rutCliente"
                                                    className={`form-control ${rutClienteError ? 'is-invalid' : ''}`}
                                                    value={rutCliente}
                                                    onChange={(e) => setRutCliente(e.target.value)}
                                                    disabled={isLoading}
                                                />
                                                {rutClienteError && <div className="invalid-feedback">{rutClienteError}</div>}
                                            </div>

                                            {/* Campo Nombre Cliente */}
                                            <div className="mb-4">
                                                <label htmlFor="nombreCliente" className="form-label">Nombre Cliente:</label>
                                                <input
                                                    type="text"
                                                    id="nombreCliente"
                                                    className={`form-control ${nomClienteError ? 'is-invalid' : ''}`}
                                                    value={nomCliente}
                                                    onChange={(e) => setNomCliente(e.target.value)}
                                                    disabled={isLoading}
                                                />
                                                {nomClienteError && <div className="invalid-feedback">{nomClienteError}</div>}
                                            </div>

                                            {/* Botón de Enviar */}
                                            <button 
                                                type="submit" 
                                                className="btn btn-success w-100" // w-100 para ancho completo, btn-success para color verde
                                                disabled={isLoading} 
                                            >
                                                {isLoading ? 'Ingresando Arriendo...' : 'Ingresar Arriendo'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        {/* FOOTER */}

                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-tittle">
                                        <div className="card-footer text-center">
                                            <h3>Info tienda</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}