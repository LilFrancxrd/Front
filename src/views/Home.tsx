import { useState } from "react";
import axiosClient from "../api/axiosClient";

interface Cliente{
    nombre:string,
    rut:string
}
export default function Home(){
    const [formData, setFormData] = useState<Partial<Cliente>>({
    nombre: '',
    rut: '',
});

const [formErrors, setFormErrors] = useState<Partial<Record<keyof Pick<Cliente, 'nombre' | 'rut'>, string>>>({}) 
const [submissionError, setSubmissionError] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [loading, setLoading] = useState(false);


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name as keyof Pick<Cliente, 'nombre' | 'rut'>]) {
        setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
    setSuccessMessage('');
    setSubmissionError('');
};

const validateForm = (): Partial<Record <keyof Cliente, string>> => {
    
    let errors: Partial<Record<keyof Cliente, string >> ={}

    if(!formData.nombre?.trim()){
        errors.nombre = "Nombre es obligatorio"
    }

    if(!formData.rut?.trim()){
        errors.rut = "rut obligatorio"
    }

    return errors
}

const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();

    setSubmissionError('')
    setSuccessMessage('')

    const currentErrors = validateForm();
    setFormErrors(currentErrors);


    if(Object.keys(currentErrors).length >0){
        return
    }

    setLoading(true)

    try {
        const response = await axiosClient.post('/cliente/crear',{
            nombre:formData.nombre,
            rut:formData.rut
        })

        setSuccessMessage(response.data.message || 'Cliente creado exitosamente.');
        setFormData({ nombre: '', rut: '' });
        setFormErrors({})
        
    } catch (error) {

        console.error('Eror al crear cliente', error)

}

return(
    <>
        <div className="container mt-5">
            <h1 className="mb-4 text-center">Bienvenido al Sistema de Gestión de Arriendos</h1>


            <div className="mt-4 p-4 border rounded bg-light"> 
                <h3 className="mb-3 text-center">Registrar Nuevo Cliente</h3>

        
                {successMessage && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {successMessage}
                        <button type="button" className="btn-close" onClick={() => setSuccessMessage('')} aria-label="Close"></button>
                    </div>
                )}
                {submissionError && (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {submissionError}
                        <button type="button" className="btn-close" onClick={() => setSubmissionError('')} aria-label="Close"></button>
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
       
                    <div className="mb-3">
                        <label htmlFor="nombreInput" className="form-label">Nombre:</label> 
                        <input
                            type="text"
                            className={`form-control ${formErrors.nombre ? 'is-invalid' : ''}`}
                            id="nombreInput"
                            name="nombre"
                            value={formData.nombre || ''}
                            onChange={handleChange}
                            placeholder="Ej: Juan Pérez"
                        />
                        {formErrors.nombre && (
                            <div className="invalid-feedback">{formErrors.nombre}</div>
                        )}
                    </div>

       
                    <div className="mb-3">
                        <label htmlFor="rutInput" className="form-label">RUT:</label>
                        <input
                            type="text"
                            className={`form-control ${formErrors.rut ? 'is-invalid' : ''}`}
                            id="rutInput"
                            name="rut"
                            value={formData.rut || ''}
                            onChange={handleChange}
                            placeholder="Ej: 12.345.678-K"
                        />
                        {formErrors.rut && (
                            <div className="invalid-feedback">{formErrors.rut}</div>
                        )}
                    </div>
                    
             
                    <button type="submit" className="btn btn-primary w-100 mt-3" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrar Cliente'}
                    </button>
                </form>
            </div>
        </div>
    
    </>
    )

}
}
