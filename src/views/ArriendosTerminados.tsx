import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";


interface Arriendo {
    idArriendo: number;
    patenteVehiculo: string;
    tipoVehiculo: string;
    rutCliente: string;
    nomCliente: string;
    fechaInicio: string;
    fechaFin: string; 
    estadoArriendo: 'terminado'; 

}

export default function ArriendosTerminados(){
    const [arriendos, setArriendos] = useState<Arriendo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    useEffect(()=>{
        fetchArriendosTerminados();
    },[])

    const fetchArriendosTerminados = async () =>{
        setLoading(true)
        setError('')
        
        try {
            const response = await axiosClient.get('/arriendo/terminados');

            if(response.data && Array.isArray(response.data.data)){
                setArriendos(response.data.data)
            }else if (response.data && response.data.message === "Todos los arriendos activos"){
                setArriendos([]);
            }

            
        } catch (error) {
            console.error('Error al obtener arriendos terminados')
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return(
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">¡Error!</h4>
                    <p>{error}</p>
                    <hr />
                    <p className="mb-0">Por favor, inténtalo de nuevo o contacta al soporte técnico.</p>
                </div>
            </div>
        )
    }

    if(error){
        return(
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">¡Error!</h4>
                    <p>{error}</p>
                    <hr />
                    <p className="mb-0">Por favor, inténtalo de nuevo o contacta al soporte técnico.</p>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Arriendos Terminados</h2>

            {arriendos.length === 0 ? (
                <div className="alert alert-info text-center" role="alert">
                    No hay arriendos marcados como "terminados" en el sistema.
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>ID Arriendo</th>
                                <th>Patente</th>
                                <th>Tipo Vehículo</th>
                                <th>RUT Cliente</th>
                                <th>Nombre Cliente</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arriendos.map((arriendo) => (
                                <tr key={arriendo.idArriendo}>
                               
                                    <td>{arriendo.idArriendo}</td><td>{arriendo.patenteVehiculo}</td><td>{arriendo.tipoVehiculo}</td><td>{arriendo.rutCliente}</td><td>{arriendo.nomCliente}</td><td>{new Date(arriendo.fechaInicio).toLocaleDateString('es-CL')}</td><td>{new Date(arriendo.fechaFin).toLocaleDateString('es-CL')}</td><td>
                                        <span className="badge bg-success">
                                            {arriendo.estadoArriendo.charAt(0).toUpperCase() + arriendo.estadoArriendo.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>

        </>
    )
}