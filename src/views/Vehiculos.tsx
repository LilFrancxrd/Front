import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function Vehiculos(){

    const [patente, setPatente]= useState('');
    const [rutCliente, setRutCliente]= useState('');
    const [tipoVehiculo, setTipoVehiculo]= useState('');
    const [nomCliente, setNomCliente]= useState('');

    const [patenteError, setPatenteError] = useState('');
    const [rutClienteError, setRutClienteError] = useState('');
    const [tipoVehiculoError, setTipoVehiculoError] = useState('');
    const [nomClienteError, setNomClienteError] = useState('');

    const [generalError, setGeneralError] = useState(''); 
    const [successMessage, setSuccessMessage] = useState('');


    const [isLoading , setIsLoading] = useState(false);
    
    const navigate = useNavigate();


    const enviarForm = async(e:React.FormEvent)=>{

        e.preventDefault()
        setPatenteError('');
        setRutClienteError('');
        setTipoVehiculoError('');
        setNomClienteError('');
        setGeneralError('');
        setSuccessMessage('');



        let valido = true;



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
        if(!valido){
            setIsLoading(false);
            return
        }

        setIsLoading(true);

        try {
            
            const response = await axiosClient.post('/arriendo/crear',{
                patente,
                rutCliente,
                tipoVehiculo,
                nomCliente
            })

            setSuccessMessage('Arriendo ingresado correctamente')
            console.log('Arriendo creado:',response.data)

            setPatente('')
            setRutCliente('')
            setTipoVehiculo('')
            setNomCliente('')

            navigate('/Home')
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
                                        <p>
                                            PATENTE: SEDN01
                                        </p>
                                
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Ford Fusion 2020 azul.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Ford Fusiomo 2020</h4>
                                        <p>
                                            PATENTE: SEDN02
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\Ford Fusion 2018.jpg" alt="" style={{height:'200px'}} />
                                        <h4>Ford Fusion 2018</h4>
                                        <p>
                                            PATENTE: SEDN03
                                        </p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-3 mt-1 mt-lg-3 me-lg-1">
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\RAM1500.webp" alt="" style={{height:'200px'}} />
                                        <h4>Ford RAM 1500</h4>
                                        <p>
                                            PATENTE: CAMN01
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\L200.webp" alt="" style={{height:'200px'}} />
                                        <h4>Mitsubishi L200</h4>
                                        <p>PATENTE: CAMN02</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\NP300.webp" alt="" style={{height:'200px'}} />
                                        <h4>NISSAN NP300</h4>
                                        <p>
                                            PATENTE: CAMN03
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-3 mt-1 mt-lg-3 me-lg-1">
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\CRETA.png" alt="" style={{height:'200px'}} />
                                        <h4>Hyundai Creta</h4>
                                        <p>
                                            PATENTE: SUVN01
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\PALADISE.png" alt="" style={{height:'200px'}} />
                                        <h4>Hyundai  Palisade</h4>
                                        <p>
                                            PATENTE: SUVN02
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-tittle">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <img src="public\img\XTRAIL.png" alt="" style={{height:'200px'}} />
                                        <h4>Nissan X-TRAIL</h4>
                                        <p>
                                            PATENTE: SUVN03
                                        </p>
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
                                    
                                            {generalError && <div className="alert alert-danger" role="alert">{generalError}</div>}
                                            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                                                
                                            <form onSubmit={enviarForm}>

                                            {/* PATENTE */}
                                            <div className="mb-3">
                                                <label htmlFor="patente" className="form-label">Patente:</label>
                                                <input
                                                    type="text"
                                                    id="patente"
                                                    className={`form-control ${patenteError ? 'is-invalid' : ''}`} 
                                                    value={patente}
                                                    onChange={(e) => setPatente(e.target.value)}
                                                    disabled={isLoading}
                                                />
                                                {patenteError && <div className="invalid-feedback">{patenteError}</div>} 
                                            </div>

                                      
                                            {/* SELECT */}

                                            <div className="mb-3">
                                                <label htmlFor="tipoVehiculo" className="form-label">Tipo de Vehículo:</label>
                                                <select
                                                    id="tipoVehiculo"
                                                    className={`form-select ${tipoVehiculoError ? 'is-invalid' : ''}`} 
                                                    value={tipoVehiculo}
                                                    onChange={(e) => setTipoVehiculo(e.target.value)}
                                                    disabled={isLoading}
                                                    required
                                                >
                                                    <option value="placeholder-value" disabled hidden>Selecciona un tipo</option>
                                                    <option value="SED">Sedan</option>
                                                    <option value="CAM">Camioneta</option>
                                                    <option value="SUV">Suv</option>
                                    
                                                </select>
                                                {tipoVehiculoError && <div className="invalid-feedback">{tipoVehiculoError}</div>}
                                            </div>

                                            {/*  RUT  */}
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

                                            {/*  NOMBRE  */}
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

                                            
                                            <button 
                                                type="submit" 
                                                className="btn btn-success w-100"
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