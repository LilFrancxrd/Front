import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";

export default function CrearUsuario(){

    const[email, setEmail] = useState('');
    const[password , setPassword] = useState('');
    const[passwordConfirmed , setPasswordConfirmed] = useState('');



    const [emailError, setEmailError] = useState('');
    const [passwordError , setPasswordError] = useState('');
    const [passwordConfirmedError, setPasswordConfirmedError] = useState('')

    const [successMessage,setSuccessMessage] = useState('')

    const[isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const enviarForm = async(e:React.FormEvent)=>{

        e.preventDefault()
        setEmailError('');
        setPasswordError('');
        setPasswordConfirmedError('');
        setSuccessMessage('');

        let valid = true;



        if(!email.trim()){
            setEmailError("El email no puede estar en blanco")
            valid = false;
        }

        if(!password.trim()){
            setPasswordError("La contraseña no puede estar vacia")
        }

        if(password!==passwordConfirmed){
            setPasswordConfirmedError('Las contraseñas no coinciden')
            valid = false;
        }

        if(!valid){
            setIsLoading(false)
            return
        }

        setIsLoading(true)

        try {
            
            const response = await axiosClient.post('/usuarios/crear',{
                email,
                password
            })

            setSuccessMessage('Usuario creado correctamente')
            console.log('Usuario creado:',response.data)

            setEmail('')
            setPassword('')
            setPasswordConfirmed('')

            navigate('/crearusuario')

        } catch (error) {
            
        }


    }

    return(
        <>
            <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">Crear Nuevo Usuario</h2>

                            {/* Mensajes generales (éxito o error de la API) */}
                            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                            
                            
                            <form onSubmit={enviarForm}>
                                {/* Campo Email */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input
                                        type="email" // Importante para validación básica del navegador
                                        id="email"
                                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading} // Deshabilita el input mientras se envía
                                        required // Marca el campo como obligatorio
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>

                                {/* Campo Contraseña */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        disabled={isLoading}
                                        required
                                    />
                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                </div>

                                {/* Campo Confirmar Contraseña */}
                                <div className="mb-3">
                                    <label htmlFor="passwordConfirmation" className="form-label">Confirmar Contraseña:</label>
                                    <input
                                        type="password"
                                        id="passwordConfirmation"
                                        className={`form-control ${passwordConfirmedError ? 'is-invalid' : ''}`}
                                        value={passwordConfirmed}
                                        onChange={(e) => setPasswordConfirmed(e.target.value)}
                                        disabled={isLoading}
                                        required
                                    />
                                    {passwordConfirmedError && <div className="invalid-feedback">{passwordConfirmedError}</div>}
                                </div>

                                {/* Botón de Enviar */}
                                <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                                    {isLoading ? 'Creando Usuario...' : 'Crear Usuario'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}