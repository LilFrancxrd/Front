import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

interface Arriendo{
    idArriendo: number;
    patenteVehiculo: string;
    tipoVehiculo: string;
    rutCliente: string;
    nomCliente: string;
    fechaInicio: string; 
    fechaFin?: string | null;
    estadoArriendo: 'activo' | 'terminado' | 'cancelado' | 'pendiente';
}


export default function ArriendosActivos(){

    const [arriendos, setArriendos] = useState<Arriendo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [actionInProgress, setActionInProgress] = useState<number | null>(null);
    
    const navigate = useNavigate();

    useEffect(()=>{
        fetchArriendos();
    },[]);

    const fetchArriendos = async () => {
        setLoading(true);
        setError('')
        setSuccessMessage('');

        try {
            const response = await axiosClient.get('/arriendo/activos')

            setArriendos(response.data.data.filter(
                (arr:Arriendo) => arr.estadoArriendo === 'activo'
            ))
        } catch (error) {
            console.error('Error al obtener arriendo',error)
            setError('No se cargaron los arriendos activos')
        }finally{
            setLoading(false)
        }

    }

    const registrarDevolucion = async(idArriendo:number) =>{

        setLoading(true)
        setSuccessMessage('')
        setError('')

        try {

            const response = await axiosClient.put(`/arriendo/${idArriendo}`)
            setSuccessMessage(response.data.message || 'Devolucion registrada con exito')
            console.log('Respuesta api: ' ,response.data)

            fetchArriendos()

            navigate('/ArriendosActivos')
        } catch (error) {
            console.error('Error al registrar devolución:', error);
        }finally{
            setLoading(false)
            setActionInProgress(null)
        }
    }

    const borrarArriendo = async(idArriendo:number)=>{
        
        setActionInProgress(idArriendo)
        setSuccessMessage('')
        setError('')


        try {

            const response = await axiosClient.delete(`/arriendo/${idArriendo} eliminado exitosamente`)
            setSuccessMessage(response.data.message || "Arriendo eliminado")
            console.log("Arriendo eliminado")
        } catch (error) {
            console.log('Error al borrar arriendo')
        }
    }

    if(loading){
        return(
            <div className="container text-center">
                <p className="lead">Cargando arriendos para devolucion</p>

            </div>
        )
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">¡Error!</h4>
                    <p>{error}</p>
                    <hr />
                    <p className="mb-0">Por favor, inténtalo de nuevo o contacta al soporte técnico.</p>
                </div>
            </div>
        );
    }

    return(
        <>
            <div className="container mt-4">
            <h2 className="mb-4 text-center">Registrar Devolución de Vehículo</h2>

            {successMessage && (
                <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                </div>
            )}
            
            {arriendos.length === 0 ? (
                <div className="alert alert-info text-center" role="alert">
                    No hay arriendos **activos** o **pendientes** para registrar devoluciones en este momento.
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
                                <th>Estado</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arriendos.map((arriendo) => (
                                <tr key={arriendo.idArriendo}>
                                    <td>{arriendo.idArriendo}</td>
                                    <td>{arriendo.patenteVehiculo}</td>
                                    <td>{arriendo.tipoVehiculo}</td>
                                    <td>{arriendo.rutCliente}</td>
                                    <td>{arriendo.nomCliente}</td>
                                    <td>{new Date(arriendo.fechaInicio).toLocaleDateString('es-CL')}</td>
                                    <td>
                                        <span className={`badge ${
                                            arriendo.estadoArriendo === 'activo' ? 'bg-primary' :
                                            arriendo.estadoArriendo === 'pendiente' ? 'bg-warning text-dark' :
                                            'bg-secondary' 
                                        }`}>
                                            {arriendo.estadoArriendo.charAt(0).toUpperCase() + arriendo.estadoArriendo.slice(1)}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="d-flex gap-2"> 
                                         
                                            {(arriendo.estadoArriendo === 'activo' || arriendo.estadoArriendo === 'pendiente') && (
                                                <button
                                                    className="btn btn-success btn-sm"
                                                    onClick={() => registrarDevolucion(arriendo.idArriendo)}
                                                    disabled={loading || actionInProgress === arriendo.idArriendo} 
                                                    title="Registrar la devolución de este vehículo"
                                                >
                                                    Devolver
                                                </button>
                                            )}
                                            
                       
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => borrarArriendo(arriendo.idArriendo)}
                                                disabled={loading || actionInProgress === arriendo.idArriendo} 
                                                title="Eliminar este arriendo permanentemente"
                                            >
                                                {actionInProgress === arriendo.idArriendo ? 'Eliminando...' : 'Eliminar'}
                                            </button>
                                        </div>
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
};


